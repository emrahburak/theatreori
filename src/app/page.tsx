import About from "@/components/About";
import SimpleSlider from "@/components/SimpleSlider";

export default function Home() {
	return (
		<div className="py-8 space-y-6">
			<SimpleSlider />
			<About />
		</div>
	);
}




