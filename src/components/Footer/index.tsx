import Image from "next/image"
import logo from "../../../public/assets/images/orilogo.jpg"

const navData = {
	name: "Tiyatro Ori",
	url: "tiyatroori.com"
}


export default function Footer() {
	return <>
		<div className="max-w-screen-xl mx-auto py-2 flex flex-col flex-nowrap h-full items-center justify-start mt-4">
			<Image src={logo} alt={navData.url} width={80} height={80} className="rounded-sm mt-4" />
			<div className="mt-4">
				<p className="font-barlow  text-white  font-bold"> ©2024 {navData.name}</p>
			</div>
			<div className="mt-4 px-4 text-center">
				<p className="font-barlow  text-slate-200  font-light "> Burada atıfta bulunulan diğer tüm ticari markalar ilgili sahiplerinin mülkiyetindedir.</p>
			</div>

		</div>

	</>

}
