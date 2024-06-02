// Componentes
import Layout from "../../components/Layout"
import CarouselPublicidad from "../../components/CarouselPublicidad"
import CarouselProductos from "../../components/CarouselProductos"
import FormContacto from "../../components/FormContacto"

export const Home = () => {
  return (
      <Layout >
        <div>Soy la página Home</div>
        <CarouselPublicidad />
        <CarouselProductos />
        <FormContacto />
      </Layout>
  )
}

export default Home