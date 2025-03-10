import { ArrowLeftRight, CartFill, Heart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import '../index.css'
import 'animate.css'

type Props = {
  img: string
}
export default function FormationItem({ img }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-4 py-6 h-auto w-[250px] overflow-hidden group">
      <div className="relative">

        <Link to={'..'} className="relative overflow-hidden">
          <img src={img} className="" alt="" />


          <div className="absolute hidden group-hover:flex bottom-0 animate__animated animate__slideInUp duration-300 w-full">
            <Link to={'..'} className="bg-darkColor w-full flex justify-center items-center bg-opacity-80 hover:bg-opacity-100 text-white py-2 px-4 cursor-pointer cartBtn overflow-hidden">
              <span className="text animate__animated animate__slideInDown duration-75">Ajouter au panier</span>
              <span className="cart animate__animated animate__slideInUp duration-75"> <CartFill className="text-2xl text-whiteColor" /></span>
            </Link>
          </div>


        </Link>

        <div className="absolute top-0 bg-redColor text-easyGrayColor text-[13px] font-semibold">
          -70%
        </div>

        <div className="hidden group-hover:block absolute right-0 top-0 animate__animated animate__slideInRight duration-700">
          <Link to={'..'} className="block p-1 rounded-md bg-grayColor text-white m-4">
            <Heart />
          </Link>

          <Link to={'..'} className="block p-1 rounded-md bg-grayColor text-white m-4">
            <ArrowLeftRight />
          </Link>
        </div>



      </div>




      <div className="flex justify-center items-center w-full">
        <Link to={'..'} className="text-[13px] hover:text-redColor transition text-center">
          Communiquer en utilisant les outils numériques
        </Link>
      </div>

      <div className="flex flex-row w-full justify-center group-hover:justify-between items-center">
        <span className="hidden group-hover:block opacity-0 group-hover:opacity-100 animate__animated animate__slideInRight duration-300 line-through text-grayColor">10 000Fcfa</span>
        <span className="font-semibold text-redColor">3 000Fcfa</span>
      </div>
    </div>
  )
}
