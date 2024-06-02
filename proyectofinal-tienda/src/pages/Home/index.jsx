// Componentes
import CarouselPublicidad from "../../components/CarouselPublicidad"
import CarouselProductos from "../../components/CarouselProductos"
import FormContacto from "../../components/FormContacto"

export const Home = () => {
  return (
    <>
      <div>Soy la página Home</div>
      <CarouselPublicidad />
      <CarouselProductos />
      <FormContacto />
    </>
  )
}

export default Home