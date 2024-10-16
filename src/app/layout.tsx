import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Navbar} from "@/components/layout/Navbar";
import ThemeProvider from "@/providers/ThemeProvider";
import {GoogleAnalytics, GoogleTagManager} from '@next/third-parties/google'
import {Footer} from "@/components/layout/Footer";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <ThemeProvider>
            <body
                className={`${geistSans.variable} ${geistMono.variable}`}>
            <Navbar/>
            {children}
            <Footer/>
            </body>
        </ThemeProvider>
        <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}/>
        <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}/>
        </html>
    );
}
