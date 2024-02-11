import { register } from "swiper/element";
import estilo from "./VejaOpcoes.module.scss";
import vejaOpcao1 from './vejaOpcao1.png';
import vejaOpcao2 from './vejaOpcao2.png';
import vejaOpcao3 from './vejaOpcao3.png';
register();

export default function VejaOpcoes() {
	return (
		<div className={estilo.opcoes}>
			<h2> Veja Mais Opções </h2>
			<p> Conheça nossas opções de produtos </p>
			<swiper-container center-insufficient-slides="true" space-between="20"
			breakpoints='{"480": {"slidesPerView": 1}, "601": {"slidesPerView": 2}, "850": {"slidesPerView": 3}}'>
			<swiper-slide>
					<img src={vejaOpcao1.src} alt="Imagem 1"/>
					<p>Texto 1</p>
				</swiper-slide>
				<swiper-slide>
					<img src={vejaOpcao2.src} alt="Imagem 1"/>
					<p>Texto 1</p>
				</swiper-slide>
				<swiper-slide>
					<img src={vejaOpcao3.src} alt="Imagem 1"/>
					<p>Texto 1</p>
				</swiper-slide>
				<swiper-slide>
					<img src={vejaOpcao1.src} alt="Imagem 1"/>
					<p>Texto 1</p>
				</swiper-slide>
				<swiper-slide>
					<img src={vejaOpcao2.src} alt="Imagem 1"/>
					<p>Texto 1</p>
				</swiper-slide>
				<swiper-slide>
					<img src={vejaOpcao3.src} alt="Imagem 1"/>
					<p>Texto 1</p>
				</swiper-slide>
			</swiper-container>
		</div>
	)
}