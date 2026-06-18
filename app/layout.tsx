import type {Metadata} from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import NavWrapper from "@/components/NavWrapper";
import Footer from "@/components/Footer";

const paragraph = Outfit({
    variable: "--font-paragraph",
    subsets: ['latin']
})

const heading = Outfit({
    variable: "--font-heading",
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: "Marjan Pascolo",
    description: "Marjan Pascolo's Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body
            className={`${heading.variable} ${paragraph.variable} antialiased`}
        >
        <NavWrapper>
            {children}
        </NavWrapper>
        <Footer/>
        </body>
        </html>
    );
}
