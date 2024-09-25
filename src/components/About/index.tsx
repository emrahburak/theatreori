
import Image from "next/image"
import logo from "../../../public/assets/images/orilogo-light.jpg"
import "./styles.css";



export default function About() {
	return <>
		<div className="flex  items-center  justify-start gap-4 h-full py-10 bg-black_01 opacity-80 font-anton text-slate-200 container p-4">
			<Image src={logo} width={300} height={200} alt="tiyatroori.com" className="shrink-0" />
			<div>
				<p>
					Herkese merhaba...
				</p>
				<p>
					Biz irem ve murat :) Biraz cesaret ve bolca emekle yeni bir yola adım atıyoruz. Bu yolda nelerle karşılaşırız bilmiyoruz ama heyecanlı, meraklı ve umutluyuz. Tiyatro Ori bünyesinde gerçekleştireceğimiz çalışmalarımızı ve yetişkin oyununumuzu ayrı bir sayfada paylaşacağız. Buradan, Tiyatro Ori Çocuk olarak ilk oyunumuzu duyurmanın sevinci içindeyiz.
				</p>

				<p>
					Küçük Prens neredeyse tüm miniklerin ve büyüklerin kalbinde iz bırakmıştır. Biz de bu güzel hikayeyi oyunlaştırdık ve içinde gölge perdemizin, gezegenlerin, anlatıcının olduğu ufak bir dünya oluşturduk.

				</p>

			</div>
		</div>
	</>
}
