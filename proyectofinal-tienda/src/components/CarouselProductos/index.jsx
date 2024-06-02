import Producto from "../Producto"

export const CarouselProductos = () => {
    return (
      <div className="carousel-productos_container">
        <p>Soy el Carousel de Productos</p>
        <Producto />
        <Producto />
        <Producto />
      </div>
    )
  }
  
  export default CarouselProductos
  