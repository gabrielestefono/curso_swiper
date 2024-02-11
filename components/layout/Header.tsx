import estilo from './Header.module.scss';
import { useState } from 'react';

export default function Header() {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => {
		scrollTo(0, 0);
		setSidebar(!sidebar);
		document.body.style.overflowY = sidebar ? 'auto' : 'hidden';
	}
	return (
		<nav className={estilo.header}>
			<a href='/'>
				<div></div>
				<span>WeBest</span>
			</a>
			<ul className={estilo.links}>
				<li><a href="/">Home</a></li>
				<li><a href="/">Shop</a></li>
				<li><a href="/">About</a></li>
				<li><a href="/">Contact</a></li>
			</ul>
			<ul className={estilo.icones}>
				<li>
					<div className={estilo.icone1}>
					</div>
				</li>
				<li>
					<div className={estilo.icone2}>
					</div>
				</li>
				<li>
					<div className={estilo.icone3}>
					</div>
				</li>
				<li>
					<div className={estilo.icone4}>
					</div>
				</li>
				<li>
					<button className={sidebar ? estilo.icone5Ativo : estilo.icone5} onClick={showSidebar}></button>
				</li>
			</ul>
			<div className={sidebar ? estilo.sidebarActive : estilo.sidebar}>
				<ul>
					<li>
						<div className={estilo.icone3}>
						</div>
					</li>
					<li><a href="/">Home</a></li>
					<li><a href="/">Shop</a></li>
					<li><a href="/">About</a></li>
					<li><a href="/">Contact</a></li>
				</ul>
			</div>
		</nav>
	)
}