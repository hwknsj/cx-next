import Alert from '@/components/Alert'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Meta from '@/components/Meta'
import Container from '@/components/Container'

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
