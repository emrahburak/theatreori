import Image from "next/image"
import logo from "@/assets/images/orilogo.jpg"

const navData = {
	name: "Tiyatro Ori",
	url: "tiyatroori.com"
}


export default function Nav() {
	return <>
		<div className="max-w-screen-xl mx-auto py-2 flex flex-nowrap h-full items-center justify-start">
			<Image src={logo} alt={navData.url} width={80} height={80} className="rounded-sm row-span-3" />
			<div className="pl-10">
				<p className="font-barlow text-2xl text-white  font-bold">{navData.name}</p>
			</div>
		</div>

	</>

}
