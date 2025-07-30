import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Institute",
    description: "Educational Institute",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
