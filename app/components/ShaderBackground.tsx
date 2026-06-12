'use client';
import { useTheme } from "next-themes";
import { useRef, useEffect, useState } from "react";
import { useShader } from "../context/ShaderContext";

declare global {
    interface Window {
        THREE: any;
    }
}

const vertShaderSource = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const fragShaderSource = `
    // Heavily modified https://www.shadertoy.com/view/MlSfzz
    precision highp float;
    
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform float u_white_theme;

    #define iTime u_time
    #define iResolution vec3(u_resolution, 0.0)
    #define WHITE_THEME u_white_theme 

    #define nsin(x) (sin(x) * 0.5 + 0.5)

    void draw_auroras(inout vec4 color, vec2 uv) {
        vec4 dark_color_a = vec4(0.5, 0.2, 0.9, 1.0);
        vec4 dark_color_b = vec4(1.0, 0.8, 1.0, 1.0);
        vec4 light_color_a = vec4(0.2, 0.0, 0.6, 1.0); 
        vec4 light_color_b = vec4(0.8, 0.1, 0.6, 1.0); 
        
        vec4 aurora_color_a = mix(dark_color_a, light_color_a, WHITE_THEME);
        vec4 aurora_color_b = mix(dark_color_b, light_color_b, WHITE_THEME);
        
        float t = nsin(-iTime + uv.x * 100.0) * 0.075 + nsin(iTime + uv.x * distance(uv.x, 0.5) * 100.0) * 0.1 - 0.5;
        t = 1.0 - smoothstep(uv.y - 4.0, uv.y * 2.0, t);
        
        vec4 final_color = mix(aurora_color_a, aurora_color_b, clamp(1.0 - uv.y * t, 0.0, 1.0));
        
        vec4 glow = final_color * final_color;
        final_color += mix(glow, vec4(0.0), WHITE_THEME); 
        
        float intensity = t * (t + 0.5) * 0.75;
        
        vec3 dark_blend = color.rgb + (final_color.rgb * intensity);
        
        float light_intensity = smoothstep(0.0, 0.8, intensity); 
        vec3 white_blend = mix(color.rgb, final_color.rgb, light_intensity);
        
        color.rgb = mix(dark_blend, white_blend, WHITE_THEME);
    }

    void mainImage(out vec4 color, vec2 coord) {
        vec2 uv = coord / iResolution.xy;
        float aspect = iResolution.x / iResolution.y;

        uv.x = (uv.x - 0.5) * aspect + 0.5;
        color = mix(vec4(0.0, 0.0, 0.0, 1.0), vec4(1.0), WHITE_THEME); 
        
        draw_auroras(color, uv);
    }

    void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
    }
`;

export default function ShaderBackground() {
    const { isShaderActive } = useShader();
    if (!isShaderActive) return null;

    const mountRef = useRef<HTMLDivElement>(null);
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const themeRef = useRef("dark"); 

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted)
            themeRef.current = resolvedTheme || theme || "dark";
    }, [resolvedTheme, theme, mounted]);

    useEffect(() => {
        let reqId: number;
        let renderer: any;
        let resizeHandler: () => void;

        const initThree = () => {
            if (!window.THREE || !mountRef.current) return;
            const THREE = window.THREE;
            mountRef.current.innerHTML = '';

            renderer = new THREE.WebGLRenderer({ 
                alpha: false,
                antialias: false
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            
            const uniforms = {
                u_time: { value: 0 },
                u_resolution: { value: new THREE.Vector2() },
                u_white_theme: { value: themeRef.current === "dark" ? 0.0 : 1.0 }
            };

            const material = new THREE.ShaderMaterial({
                uniforms: uniforms,
                vertexShader: vertShaderSource,
                fragmentShader: fragShaderSource,
            });

            const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
            scene.add(plane);

            mountRef.current.appendChild(renderer.domElement);

            resizeHandler = () => {
                const width = window.innerWidth;
                const height = window.innerHeight;
                renderer.setSize(width, height);
                
                uniforms.u_resolution.value.set(
                    renderer.domElement.width, 
                    renderer.domElement.height
                );
            };
            
            window.addEventListener('resize', resizeHandler);
            resizeHandler();

            const animate = (time: number) => {
                uniforms.u_time.value = time * 0.001;
                uniforms.u_white_theme.value = themeRef.current === "dark" ? 0.0 : 1.0; 
                
                renderer.render(scene, camera);
                reqId = requestAnimationFrame(animate);
            };
            
            reqId = requestAnimationFrame(animate);
        };

        if (window.THREE) {
            initThree();
        } else {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
            script.onload = initThree;
            document.body.appendChild(script);
        }

        return () => {
            if (resizeHandler) window.removeEventListener('resize', resizeHandler);
            if (reqId) cancelAnimationFrame(reqId);
            if (renderer) renderer.dispose();
            if (mountRef.current) mountRef.current.innerHTML = '';
        };
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
}