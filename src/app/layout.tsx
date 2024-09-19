import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import bg from "@/assets/images/bg-01.jpg"

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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-cover bg-center min-h-screen`}
				style={{
					backgroundImage: `url(${bg.src})`,
				}}
			>
				{/* Gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80  z-0"></div>

				{/* İçerik */}
				<header className="relative z-10">
					<Nav />
				</header>

				<main className="relative z-10 max-w-screen-xl mx-auto">
					{children}
				</main>

				<footer className="relative z-10">
					Footer
				</footer>
			</body>
		</html>
	);
}
