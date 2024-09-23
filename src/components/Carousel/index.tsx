"use client";
import Image from "next/image";
import banner from "@/assets/images/little_prince.png"

import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
	margin: 0,
	height: '30rem',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#1d1d1d',
	opacity: .9,

}


const Slide: React.FC = () => {
	const onChange = (currentSlide: number) => {
		console.log(currentSlide)
	}

	return (
		<Carousel arrows infinite={false} afterChange={onChange}>
			<div >
				<div className=" grid lg:grid-cols-2 sm:grid-cols-1" style={contentStyle}>
					<Image src={banner} alt="tiyatroori" height={480} />
					<div>
						<p>
							Süre: 35 dk
							<br />
							Yaş sınırı: +5 (5 yaş ve üzeri çocuklarımız için uygundur)
						</p>

					</div>
				</div>
			</div>
			<div>
				<h3 style={contentStyle}>2</h3>
			</div>
			<div>
				<h3 style={contentStyle}>3</h3>
			</div>
		</Carousel>

	)
}

export default Slide;
