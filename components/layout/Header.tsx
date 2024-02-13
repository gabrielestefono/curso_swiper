import Link from 'next/link';
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
			<Link href='/'>
				<div></div>
				<span>WeBest</span>
			</Link>
			<ul className={estilo.links}>
				<li><Link href='/'>Home</Link></li>
				<li><Link href='/'>Shop</Link></li>
				<li><Link href='/'>About</Link></li>
				<li><Link href='/'>Contact</Link></li>
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
					<li><Link href='/'>Home</Link></li>
					<li><Link href='/'>Shop</Link></li>
					<li><Link href='/'>About</Link></li>
					<li><Link href='/'>Contact</Link></li>
				</ul>
			</div>
		</nav>
	)
}