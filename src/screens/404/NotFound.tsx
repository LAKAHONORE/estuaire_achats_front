import { Link } from "react-router-dom";
import "./index.css"

export default function NotFound() {
  return (
    <div className="flex h-auto justify-center items-center w-full py-10">

      <div className="flex flex-col w-full justify-center items-center h-auto">
         <img src="/assets/img/404.png" className="w-[200px] md:w-[300px] h-auto animate-pulse" alt="" />

         <div className="flex flex-row gap-6 py-16 animate__animated animate__fadeIn duration-50">
          <div className="flex justify-center items-center bg-redColor w-10 md:w-16 h-10 md:h-16 rounded-full animate">
            <span className="text-whiteColor text-xl font-semibold">4</span>
          </div>

          <div className="flex justify-center items-center bg-redColor w-10 md:w-16 h-10 md:h-16 rounded-full animate">
            <span className="text-whiteColor text-xl font-semibold">0</span>
          </div>

          <div className="flex justify-center items-center bg-redColor w-10 md:w-16 h-10 md:h-16 rounded-full animate">
            <span className="text-whiteColor text-xl font-semibold">4</span>
          </div>
        </div>

         <span className="text-center">Cette page n'est pas disponible pour le moment.</span>

         <Link to={'/'} className="bg-redColor py-2 px-4 text-white font-semibold my-6 hover:bg-red-700 transition rounded-sm">
          Retour à la page d'accueil
         </Link>
      </div>

    </div>
  )
}
