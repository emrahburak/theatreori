import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import bg from "../../public/assets/images/bg-01.jpg"
import Footer from "@/components/Footer";


export const metadata: Metadata = {
	title: "Tiyatro Ori",
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className="relative bg-cover bg-center min-h-screen"
				style={{
					backgroundImage: `url(${bg.src})`,
				}}
			>
				{/* Gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-black_01 via-transparent to-black_02 opacity-60  z-0"></div>

				{/* İçerik */}
				<header className="relative z-10 bg-black_01">
					<Nav />
				</header>

				<main className="relative z-10 max-w-screen-xl mx-auto">
					{children}
				</main>

				<footer className="relative z-10 bg-black_01">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
