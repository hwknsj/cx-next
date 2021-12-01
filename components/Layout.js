import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Meta from '@/components/Meta'
import Container from '@/components/Container'

const Layout = ({ children }) => (
  <>
    <Meta />
    <Navbar />
    <Container>{children}</Container>
    <Footer />
  </>
)

export default Layout
