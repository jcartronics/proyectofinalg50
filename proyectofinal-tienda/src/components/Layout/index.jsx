
import PropTypes from 'prop-types'

export const Layout = ({children}) => {
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    }
  return (
    <div className="layout_container">
        {children}
    </div>
  )
}

export default Layout