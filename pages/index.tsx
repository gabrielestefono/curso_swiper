import CarouselPrincipal from "@/components/home/CarouselPrincipal";
import Inspiracoes from "@/components/home/Inspiracoes";
import Produtos from "@/components/home/Produtos";
import VejaOpcoes from "@/components/home/VejaOpcoes";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <CarouselPrincipal/>
      <VejaOpcoes/>
      <Produtos/>
      <Inspiracoes/>
    </Layout>
  );
}