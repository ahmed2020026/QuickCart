import { Route, Routes } from "react-router-dom"
import { Header } from "./component/Header"
import { Home } from "./pages/Home"
import { Footer } from "./component/Footer"
import { Product } from "./pages/Product"
import { AllProducts } from "./pages/AllProducts"
import { NotFound } from "./pages/NotFound"


export const App = () => {

  return (
    <>
      <header className="shadow-md relative bg-white" style={{ zIndex: 1200 }}>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/all-products/:id" element={<Product/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="border-t border-gray-200 pt-5">
        <Footer />
      </footer>
    </>
  )
}