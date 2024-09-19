import Image from "next/image"
import logo from "@/assets/images/orilogo.jpg"

export default function Nav() {
	return <>
		<div className="max-w-screen-xl mx-auto py-2 flex flex-nowrap h-full items-center justify-start">
			<Image src={logo} alt="tiyatroori" width={80} height={80} className="rounded-sm row-span-3" />
			<div className="pl-10">
				<p className="text-2xl font-sans font-bold ">Tiyatro Ori</p>
			</div>
		</div>

	</>

}
