import estilo from './Footer.module.scss';

export default function Footer() {
	return(
		<footer className={estilo.footer}>
			<div>
				<div className={estilo.divlogo}>
					<div className={estilo.logo}>
						<a href="/">WeBest</a>
						<div>
							<span>Marechal Cândido Rondon - PR</span>
							<span>(45) 9-9999-9999</span>
						</div>
					</div>
					<div>
						<ul>
							<li className={estilo.ulTitle}>Links</li>
							<li><a href="/">Início</a></li>
							<li><a href="/">Loja</a></li>
							<li><a href="/">Sobre</a></li>
							<li><a href="/">Contato</a></li>
						</ul>
						<ul>
							<li className={estilo.ulTitle}>Ajuda</li>
							<li><a href="/">Opções de Pagamento</a></li>
							<li><a href="/">Retornos?</a></li>
							<li><a href="/">Política de Privacidade</a></li>
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