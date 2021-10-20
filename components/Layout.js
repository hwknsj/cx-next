import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Meta from '@/components/Meta'
import Container from '@/components/Container'

const Layout = ({ children }) => (
  <>
    <Meta />
    <Navbar />
    <Container>
      <main>{children}</main>
    </Container>
    <Footer />
  </>
)

export default Layout
