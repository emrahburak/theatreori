import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/assets/images/orilogo.jpg"
import { Space } from "antd"
import { InstagramOutlined, InstagramFilled } from "@ant-design/icons"


const navData = {
	name: "Tiyatro Ori",
	url: "tiyatroori.com",
	instagram: "https://www.instagram.com/tiyatroori_cocuk/"

}


export default function Nav() {
	return <>
		<div className="max-w-screen-xl mx-auto py-2 flex  flex-nowrap h-full items-center justify-start">
			<Image src={logo} alt={navData.url} width={80} height={80} className="rounded-sm row-span-3" />
			<div className="pl-10">
				<p className="font-anton text-3xl text-white  font-bold">{navData.name}</p>
			</div>
			<Space className="text-white text-3xl ml-auto pr-4">
				<Link href={navData.instagram} target="_blank">
					<InstagramFilled />
				</Link>

			</Space>
		</div>

	</>

}
