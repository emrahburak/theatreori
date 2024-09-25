import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			barlow: ["Barlow", "sans-seif"],
			anton: ["Anton", "sans-serif"]
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				black_01: "#1d1d1d",
				black_02: "#0a0a0a",
			},
		},
	},
	plugins: [],
};
export default config;
