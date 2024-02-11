import Footer from "./Footer";
import Header from "./Header";
import estilo from './Layout.module.scss';

export default function Layout({ children }: Readonly<React.PropsWithChildren<{}>>) {
	return (
		<main>
			<Header/>
				<div className={estilo.layout}>
					{children}
				</div>
			<Footer/>
		</main>
  	)	
}