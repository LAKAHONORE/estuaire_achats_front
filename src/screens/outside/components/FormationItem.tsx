import { ArrowLeftRight, Heart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import '../index.css'

export default function FormationItem() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-4 py-6 h-auto w-[250px] group">
      <div className="relative">

        <Link to={'..'} className="overflow-hidden">
          <img src="assets/img/technology.jpeg" className="hover:scale-105 duration-300" alt="" />
        </Link>



        <div className="hidden group-hover:block absolute right-0 top-0 p-2 duration-700">
          <div className="p-2 rounded-md bg-grayColor text-white m-4">
            <Heart />
          </div>

          <div className="p-2 rounded-md bg-grayColor text-white m-4">
            <ArrowLeftRight />
          </div>
        </div>

      </div>

      <div className="flex justify-center items-center w-full">
        <Link to={'..'} className="bg-darkColor text-white py-2 px-4">
          Ajouter au panier
        </Link>
      </div>


      <div className="flex justify-center items-center w-full">
        <Link to={'..'} className="text-[13px] hover:text-redColor transition">
          Ajouter au panier
        </Link>
      </div>

      <div className="flex flex-row w-full justify-between items-center">
        <span className="line-through text-grayColor">10 000Fcfa</span>
        <span className="font-semibold text-redColor">3 000Fcfa</span>
      </div>
    </div>
  )
}
