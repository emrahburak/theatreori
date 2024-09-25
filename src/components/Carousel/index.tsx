"use client";
import React from "react";
import { Carousel } from "antd";
import BannerContent from "../BannerContent";
import { playsData } from "@/lib/data/games";

const contentStyle: React.CSSProperties = {
	margin: 0,
	color: '#fff',
	lineHeight: '160px',
	background: '#1d1d1d',
	opacity: .9,

}


const Slide: React.FC = () => {
	const onChange = (currentSlide: number) => {
		console.log(currentSlide)
	}

	return (
		<Carousel arrows infinite={false} afterChange={onChange}>
			{playsData.map(play => {
				return (
					<div key={play.id} >
						<BannerContent contentStyle={contentStyle} play={play} />
					</div>

				)

			})}
		</Carousel >

	)
}

export default Slide;
