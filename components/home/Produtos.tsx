import Produto from './Produto';
import estilo from './Produtos.module.scss';
import produto1 from './Produto01.png';
import produto2 from './Produto02.png';
import produto3 from './Produto03.png';
import produto4 from './Produto04.png';
import produto5 from './Produto05.png';
import produto6 from './Produto06.png';
import produto7 from './Produto07.png';
import produto8 from './Produto08.png';

export default function Produtos() {
	return (
		<div className={estilo.produtos}>
			<h2>Nossos Produtos</h2>
			<div>
			<Produto imagem={produto1.src} altImagem="Alt da imagem" nome="Mesa de centro" descricao="Um apoio para a sua diversão" precoAtual="3.500,00" precoAntigo="4.000,00" desconto={20}/>
			<Produto imagem={produto2.src} altImagem="Alt da imagem" nome="Sofá" descricao="Relaxar com a Família pode ser mais divertido" precoAtual="3.500,00" novo={true}/>
			<Produto imagem={produto3.src} altImagem="Alt da imagem" nome="Cadeira" descricao="Conforto e qualidade" precoAtual="3.500,00"/>
			<Produto imagem={produto4.src} altImagem="Alt da imagem" nome="Ventilador de teto" descricao="Dia quentes? Nunca mais" precoAtual="600,00" precoAntigo="400,00" desconto={33}/>
			<Produto imagem={produto5.src} altImagem="Alt da imagem" nome="Abajur" descricao="Perfeito para iluminar a sua vida" precoAtual="400,00"/>
			<Produto imagem={produto6.src} altImagem="Alt da imagem" nome="Caneca" descricao="Elegante e quem não precisa de café?" precoAtual="50,00" precoAntigo="25,00" desconto={50}/>
			<Produto imagem={produto7.src} altImagem="Alt da imagem" nome="Lençol" descricao="Agora o friozinho não escapa" precoAtual="400,00" novo={true}/>
			<Produto imagem={produto8.src} altImagem="Alt da imagem" nome="Vaso" descricao="Chique no 'urtimo'" precoAtual="85,00" precoAntigo="100,00" desconto={15} novo={false}/>
			</div>
		</div>
	);
}