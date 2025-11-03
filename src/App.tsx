import { Route, Routes } from "react-router-dom"
import { Header } from "./component/Header"


export const App = () => {

  return (
    <>
      <header className="shadow">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element = ''/>
        </Routes>
      </main>
      <footer></footer>
    </>
  )
}