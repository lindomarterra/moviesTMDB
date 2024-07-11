import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Copyright from "./components/copyright"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default App
