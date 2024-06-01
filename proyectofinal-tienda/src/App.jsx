import { useRoutes, BrowserRouter } from 'react-router-dom'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// Paginas
import Home from './pages/Home'
import AgregarDireccion from './pages/AgregarDireccion'
import AgregarProducto from './pages/AgregarProducto'
import Carrito from './pages/Carrito'
import DetalleProducto from './pages/DetalleProducto'
import EditarPerfil from './pages/EditarPerfil'
import Favoritos from './pages/Favoritos'
import Login from './pages/Login'
import Productos from './pages/Productos'
import Registro from './pages/Registro'
import NotFound from './pages/NotFound'

// Componentes
import Navbar from './components/Navbar'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/agregar-direccion', element: <AgregarDireccion /> },
    { path: '/agregar-producto', element: <AgregarProducto /> },
    { path: '/carrito', element: <Carrito /> },
    { path: '/detalle-producto', element: <DetalleProducto /> },
    { path: '/editar-perfil', element: <EditarPerfil /> },
    { path: '/favoritos', element: <Favoritos /> },
    { path: '/login', element: <Login /> },
    { path: '/productos', element: <Productos /> },
    { path: '/registro', element: <Registro /> },
    { path: '*', element: <NotFound />}
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
