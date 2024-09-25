export interface Play {
	id: number,
	title: string,
	description: string,
	ageLimit: string,
	duration: string,
	photo: string,
	author: string
}




export const playsData: Play[] = [
	{
		id: 1,
		title: "Küçük Prens",
		description: "Küçük Prens küçükten büyüğe birçok insanın kalbinde iz bırakmıştır. Biz de bu klasiği biraz yumuşattık ve 5 yaş ve üzeri için izlenebilecek şekilde oyunlaştırdık.Oyunumuzda hem gölge perdesini hem hikaye anlatıcılığını kullanarak renkli ve eğlenceli bir atmosfer oluşturmaya çalıştık.",
		ageLimit: "+5 (5 yaş ve üzeri çocuklarımız için uygundur)",
		duration: "35 dk",
		photo: "/assets/images/play-01.png",
		author: "Antoine de Saint-Exupery"
	},
	{
		id: 2,
		title: "Küçük Prens",
		description: "Küçük Prens küçükten büyüğe birçok insanın kalbinde iz bırakmıştır. Biz de bu klasiği biraz yumuşattık ve 5 yaş ve üzeri için izlenebilecek şekilde oyunlaştırdık.Oyunumuzda hem gölge perdesini hem hikaye anlatıcılığını kullanarak renkli ve eğlenceli bir atmosfer oluşturmaya çalıştık.",
		ageLimit: "+5 (5 yaş ve üzeri çocuklarımız için uygundur)",
		duration: "35 dk",
		photo: "/assets/images/play-01.png",
		author: "Antoine de Saint-Exupery"
	},

]


