import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Mohim Academy",
    description: "Educational Institute",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <Toaster richColors position="top-right" />
                {children}
                <Footer />
            </body>
        </html>
    );
}
