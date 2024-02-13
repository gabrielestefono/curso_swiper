import Link from 'next/link';
import estilo from './Footer.module.scss';

export default function Footer() {
	return(
		<footer className={estilo.footer}>
			<div>
				<div className={estilo.divlogo}>
					<div className={estilo.logo}>
						<Link href="/">WeBest</Link>
						<div>
							<span>Marechal Cândido Rondon - PR</span>
							<span>(45) 9-9999-9999</span>
						</div>
					</div>
					<div>
						<ul>
							<li className={estilo.ulTitle}>Links</li>
							<li><Link href="/">Início</Link></li>
							<li><Link href="/">Loja</Link></li>
							<li><Link href="/">Sobre</Link></li>
							<li><Link href="/">Contato</Link></li>
						</ul>
						<ul>
							<li className={estilo.ulTitle}>Ajuda</li>
							<li><Link href="/">Opções de Pagamento</Link></li>
							<li><Link href="/">Retornos?</Link></li>
							<li><Link href="/">Política de Privacidade</Link></li>
						</ul>
					</div>
				</div>
				<div className={estilo.newsletter}>
					<h3>NewsLetter</h3>
					<form>
						<input type="email" placeholder="Digite o seu email" name='email' required/>
						<button type="submit">Inscreva-se</button>
					</form>
				</div>
			</div>
			<div>
				<p>2024 - WeBest - Todos os direitos reservados</p>
			</div>
		</footer>
  	)
}