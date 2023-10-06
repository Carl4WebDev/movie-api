import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"
import {Button} from "../components"
import { useEffect } from "react"

function PageNotFound() {

  useEffect(() => {
    document.title = `Page Not Found/Cinemate`
  })
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-5">
          <p className="dark:text-white  text-7xl font-black my-5">404, ooppss!</p> 
          <div className="max-w-lg">
            <img className="rounded " src={Logo} alt="PageNotFound"/>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Cinemate</Button>
          </Link>
        </div>

      </section>

    </main>
  )
}

export default PageNotFound