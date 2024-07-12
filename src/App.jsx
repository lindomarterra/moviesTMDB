import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Copyright from "./components/copyright"
import Arrowup from "./components/arrowup"

const App = () => {
  return (
    <div className="position-relative">
      <Navbar />
      <Arrowup/>
      <Outlet />
      <Footer />
      <Copyright />
    </div>
  )
}

export default App
