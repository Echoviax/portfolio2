'use client';
import { useTheme } from "next-themes";
import { useRef, useEffect, useState } from "react";
import { useEffects } from "../context/ShaderContext";

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

// const bokehFragShaderSource = `
//     precision highp float;
    
//     uniform float u_time;
//     uniform vec2 u_resolution;
//     uniform float u_white_theme;

//     #define iTime u_time
//     #define iResolution vec3(u_resolution, 0.0)
//     #define WHITE_THEME u_white_theme 

//     vec2 hash2(float n) {
//         vec2 n2 = vec2(n, -n + 2.1323);
//         return fract(sin(n2) * 1751.5453);
//     }

//     void main() {
//         vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
        
//         vec3 col = vec3(0.0);
//         float t = iTime / 4.0;

//         for(float i = 0.0; i < 100.0; i++) {
//             vec2 pos = hash2(i) * 2.0 - 1.0;
            
//             pos.x *= (iResolution.x / iResolution.y); 
//             pos += vec2(sin(t * 2.0 + i), cos(t * 1.5 + i * 0.8)) * 0.01;
            
//             float dist = length(uv - pos);
//             float sizeScale = 0.7 + fract(sin(i * 34.12) * 232.1) * 0.5;
//             dist /= sizeScale;
            
//             float circle = smoothstep(0.12, 0.08, dist) * 0.4 + smoothstep(0.10, 0.09, dist) * 0.2;
//             float fade = sin(i * 123.45 + t * 2.0) * 0.5 + 0.5;

//             vec3 circleColor = mix(vec3(1.0, 1.0, 1.0), vec3(0.7, 0.5, 0.8), 0.5 + 0.5 * sin(i * 1.2 + 1.9));
            
//             col += circle * fade * circleColor;
//         }

//         vec3 bgDark = vec3(0.05);
//         vec3 bgLight = vec3(1.0);
//         vec3 bgColor = mix(bgDark, bgLight, WHITE_THEME);
        
//         if (WHITE_THEME > 0.5) {
//             float intensity = dot(col, vec3(0.199, 0.187, 0.114));
//             vec3 lightModePurple = vec3(0.5, 0.2, 0.8); 
//             col = mix(bgColor, lightModePurple, clamp(intensity * 1.5, 0.0, 1.0));
//         } else {
//             col += bgColor;
//         }

//         gl_FragColor = vec4(col, 1.0);
//     }
// `;

const auroraFragShaderSource = `
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

// const allShaders = [auroraFragShaderSource, bokehFragShaderSource];

export default function ShaderBackground() {
    const { areEffectsActive } = useEffects();
    if (!areEffectsActive) return null;

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
        let isActive = true;

        let reqId: number;
        let renderer: any;
        let resizeHandler: () => void;
        let geometry: any;
        let material: any;

        const initThree = () => {
            if (!isActive || !window.THREE || !mountRef.current) return;
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

            // const frag = allShaders[Math.floor(Math.random() * allShaders.length)];

            geometry = new THREE.PlaneGeometry(2, 2);
            material = new THREE.ShaderMaterial({
                uniforms: uniforms,
                vertexShader: vertShaderSource,
                fragmentShader: auroraFragShaderSource,
            });

            const plane = new THREE.Mesh(geometry, material);
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
                if (!isActive) return;

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
            let script = document.getElementById('three-js-script') as HTMLScriptElement;
            if (!script) {
                script = document.createElement('script');
                script.id = 'three-js-script';
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
                document.body.appendChild(script);
            }
            script.addEventListener('load', initThree);
        }

        return () => {
            isActive = false;
            if (resizeHandler) window.removeEventListener('resize', resizeHandler);
            if (reqId) cancelAnimationFrame(reqId);
            if (geometry) geometry.dispose();
            if (material) material.dispose();
            if (renderer) {
                renderer.forceContextLoss(); 
                renderer.dispose();
                renderer.domElement = null;
            }
            if (mountRef.current) mountRef.current.innerHTML = '';
        };
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" aria-hidden={true} />;
}