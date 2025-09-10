import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Git Collaborator",
  description: "A collaborative platform for Git users",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
