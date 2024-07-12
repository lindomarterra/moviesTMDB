import { BiArrowToTop } from "react-icons/bi"
import { Link } from "react-router-dom"

const Arrowup = () => {
  return (
    <div className="arrow-up bg-white position-fixed bottom-0 rounded-5 d-flex align-self-center m-3">
      <Link to="/" target="_top" className="text-decoration-none px-2 py-2">
        <abbr title="go to home page!">
          <BiArrowToTop className="text-black fs-4"/>
        </abbr>
      </Link>
    </div>
  )
}

export default Arrowup
