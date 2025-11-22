import { Route, Routes } from "react-router-dom"
import { Header } from "./component/Header"
import { Home } from "./pages/Home"
import { Footer } from "./component/Footer"
import { lazy, Suspense } from "react"
import { Spinner } from "./component/Spinner"
import { Toaster } from "sonner"

const AllProducts = lazy(() => import("./pages/AllProducts"));
const Product = lazy(() => import("./pages/Product"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CartPage = lazy(() => import("./pages/cartPage"));


export const App = () => {

  return (
    <>
      <Toaster richColors />
      <header className="shadow-md relative bg-white" style={{ zIndex: 1200 }}>
        <Header />
      </header>
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/all-products/:id" element={<Product />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <footer className="border-t border-gray-200 pt-5">
        <Footer />
      </footer>
    </>
  )
}