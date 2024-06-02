import {NavLink} from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="footer_container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2024 TronicsStore</p>

        <NavLink to="/home" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          Tronicstore
        </NavLink>

        <ul className="nav col-md-4 justify-content-end">

          <NavLink to="/home" className="nav-link px-2 text-muted">Home</NavLink>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
