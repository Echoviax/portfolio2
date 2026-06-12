import "./globals.css";
import './styles/Master.css';
import Sidebar from "./components/Sidebar";
import { Geist } from 'next/font/google';
import MobileNav from "./components/MobileNav";

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
    >
      <body className="min-h-full flex flex-col">
        <Sidebar />
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
