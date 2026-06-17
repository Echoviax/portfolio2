import "./globals.css";
import { Geist } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import { EffectProvider } from "./context/ShaderContext";

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
      <EffectProvider>
        <body className="min-h-full flex flex-col">
          <ThemeProvider attribute="class">
              {children}
          </ThemeProvider>
        </body>
      </EffectProvider>
    </html>
  );
}
