interface Produto{
	imagem: string;
	altImagem: string;
	nome: string;
	descricao: string;
	precoAtual: string;
	precoAntigo?: string;
	desconto?: number;
	novo?: boolean;
}