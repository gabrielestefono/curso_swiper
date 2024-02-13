import Link from "next/link";
import estilo from "./Inspiracoes.module.scss";

export default function Inspiracoes() {
	return (
		<div className={estilo.inspiracoes}>
			<div>
				<h2>50+ Beautiful rooms inspiration</h2>
				<p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
				<Link href="/">Explore More</Link>
			</div>
			<div>
				<swiper-container>
					<swiper-slide>
					</swiper-slide>
				</swiper-container>
			</div>
		</div>
	)
}