import Footer from "./parts/Footer"
import Header from "./parts/Header"
interface MainLayoutProps {
  children: JSX.Element
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout