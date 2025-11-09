import { Route, Routes } from "react-router-dom"
import { Header } from "./component/Header"
import { Home } from "./pages/Home"


export const App = () => {

  return (
    <>
      <header className="shadow-md relative bg-white" style={{zIndex:1200}}>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  )
}