import CarouselPrincipal from "@/components/home/CarouselPrincipal";
import VejaOpcoes from "@/components/home/VejaOpcoes";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <CarouselPrincipal/>
      <VejaOpcoes/>
    </Layout>
  );
}