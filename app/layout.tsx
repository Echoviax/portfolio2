import "./globals.css";
import './styles/Master.css';
import Sidebar from "./components/Sidebar";
import { Geist } from 'next/font/google';
import MobileNav from "./components/MobileNav";
import ShaderBackground from "./components/ShaderBackground";
import { ThemeProvider } from "next-themes";
import { ShaderProvider } from "./context/ShaderContext";

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class">
          <ShaderProvider>
            <Sidebar />
            <MobileNav />
            <ShaderBackground />
            {children}
          </ShaderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
