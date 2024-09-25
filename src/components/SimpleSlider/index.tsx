"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import BannerContent from "../BannerContent";
import Image from "next/image";
import { playsData } from "@/lib/data/games";
import "swiper/css";
import "./styles.css";


const contentStyle: React.CSSProperties = {
	background: '#1d1d1d',

}


export default () => {
	return (
		<>
			<Swiper className="w-full">
				{playsData.map(play => {
					return (
						<SwiperSlide key={play.id} style={contentStyle}>

							<div style={{ position: 'relative', width: '360px', height: '500px' }} className="sm:shrink-0 border border-black_01 shadow-lg">

								<Image
									src={play.photo}
									alt="tiyatroori.com"
									sizes="300px"
									fill
									style={{ objectFit: "contain" }}

								/>
							</div>

							<div className="slider-text space-y-2">
								<div className="uppercase font-antont  text-sm text-indigo-300 font-semibold">{play.title}</div>
								<p className="block mt-1 text-lg leading-tight font-medium text-slate-200 ">Süre: {play.duration}</p>
								<p className="block mt-1 text-lg leading-tight font-medium text-slate-200 ">Yazar: {play.author}</p>
								<p className="block mt-1 text-lg leading-tight font-medium text-slate-200 ">Yaş Sınırı: {play.ageLimit}</p>
								<p className="block mt-1 text-lg leading-tight font-medium text-slate-200 ">{play.description}</p>
							</div>


						</SwiperSlide>
					)

				})}
			</Swiper>
		</>
	);
}

