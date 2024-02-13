import estilo from './Produto.module.scss';
import { useState } from 'react';
import Compartilhe from './Compartilhe.svg';
import Compare from './Compare.svg';
import Like from './Like.svg';

export default function Product({imagem, altImagem, nome, descricao, precoAtual, precoAntigo, desconto, novo}: Readonly<Produto>){
	
	const [showButton, setShowButton] = useState(false);
	
	function criarBadge(){
		if(novo){
			return <div className={estilo.badgeNovo}>New</div>
		}else if(desconto){
			return <div className={estilo.badgeDesconto}>-{desconto}%</div>
		}else{
			return null;
		}
	}

	function mostrarBotao(){
		setShowButton(true);
	}

	function esconderBotao(){
		setShowButton(false);
	}

	function mostrarAcoes(){
		return (
			<div className={estilo.acoes}>
				<button>Adicionar ao Carrinho</button>
				<div>
					<button>
						<img src={Compartilhe.src} alt="Compartilhe!"/>
						<span>Compartilhar</span>
					</button>
					<button>
						<img src={Compare.src} alt="Compare!"/>
						<span>Comparar</span>
					</button>
					<button>
						<img src={Like.src} alt="Dê seu like!"/>
						<span>Like</span>
					</button>
				</div>
			</div>
		);
	
	}

	return (
		<div className={estilo.produto}
			onMouseEnter={mostrarBotao}
			onMouseLeave={esconderBotao}
		>
			<div>
				<img src={imagem} alt={altImagem}/>
				{criarBadge()}
			</div>
			<h3>{nome}</h3>
			<p>{descricao}</p>
			<div className={estilo.precos}>
				<p>R$ <span>{precoAtual}</span></p>
				{precoAntigo ? <p>R$ {precoAntigo}</p> : ''}
			</div>
			{showButton ? mostrarAcoes() : ''}
		</div>
  );
}