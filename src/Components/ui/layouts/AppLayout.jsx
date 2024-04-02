import Footer from './Footer'
import Header from './Header'
import PropTypes from 'prop-types'

export default function AppLayout({children}) {
    return (
        <>
          <Header></Header>
          <main>{children}</main>
          <Footer></Footer>
        </>
    )
}

AppLayout.PropTypes = {
    children: PropTypes.node.isRequired
}