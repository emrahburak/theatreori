import Image from "next/image"
import React from "react"
import { Play } from "@/lib/data/games"

type Props = {
	contentStyle: React.CSSProperties,
	play: Play
}


export default function BannerContent({ contentStyle, play }: Props) {
	return <>
		<div className="grid lg:grid-cols-2 sm:grid-cols-1" style={contentStyle}>

			<div className="block">
				<div className="relative w-full h-full">
					<Image
						src={play.photo}
						alt="tiyatroori"
						layout="fill"  // Ebeveyninin tüm alanını kaplamasını sağlar
						objectFit="contain"
					/>
				</div>

			</div>

			<div>
				<div>{play.title}</div>
				<div>Süre: {play.duration}</div>
				<div>{play.description}</div>

			</div>


		</div>


	</>

}
