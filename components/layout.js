import Alert from './Alert'
import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'
import Container from './Container'

const Layout = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <Container>
        <Header />
        <Alert preview={preview} />
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
