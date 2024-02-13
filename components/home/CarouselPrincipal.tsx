import carousel from './carousel.png';
import { register } from "swiper/element";
import estilo from './CarouselPrincipal.module.scss';
import Link from 'next/link';
register();

export default function CarouselPrincipal() {
	return (
		<div className={estilo.carousel}>
			<swiper-container>
				<swiper-slide>
					<div>
						<h2>Novo Produto</h2>
						<h1>Descubra a Nossa Nova Coleção</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
						<Link href="/">Compre</Link>
					</div>
					<img src={carousel.src} alt="Imagem do Produto"/>
				</swiper-slide>
				<swiper-slide>
					<div>
						<h2>Novo Produto</h2>
						<h1>Descubra a Nossa Nova Coleção</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
						<Link href="/">Compre</Link>
					</div>
					<img src={carousel.src} alt="Imagem do Produto"/>
				</swiper-slide>
				<swiper-slide>
					<div>
						<h2>Novo Produto</h2>
						<h1>Descubra a Nossa Nova Coleção</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
						<Link href="/">Compre</Link>
					</div>
					<img src={carousel.src} alt="Imagem do Produto"/>
				</swiper-slide>
			</swiper-container>
		</div>
	);
}