import { Arrow90degLeft, Award, ExclamationCircle, FileEarmarkText } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Termes() {
  return (
    <div className="flex flex-col w-full bg-gray-200">
      <div className="flex flex-row md:gap-4 py-8 px-3 md:px-48">
        <div className="flex flex-row gap-1">
          <span className="text-grayColor uppercase text-[13px] md:text-2xl font-semibold">estuaire achats</span>
          <span className="text-grayColor uppercase md:text-2xl">|</span>
        </div>

          <span className="text-grayColor uppercase text-[13px] md:text-2xl font-semibold">SITE E-COMMERCE MULTIFOUNISSEUR</span>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 w-full border-[1px] border-gray-300 md:px-48 items-center">
        <Link to={'..'}>
          <div className="flex flex-col justify-center items-center px-16 py-8 gap-3 border-[1px] border-gray-300 hover:font-semibold transition-all">
            <FileEarmarkText className="text-3xl hover:text-redColor transition-all" />
            <span>Termes et conditions</span>
          </div>
        </Link>

        <Link to={'..'}>
          <div className="flex flex-col justify-center items-center px-16 py-8 gap-3 border-[1px] border-gray-300 hover:font-semibold transition-all">
            <Arrow90degLeft className="text-3xl hover:text-redColor transition-all" />
            <span className="text-center">Politique de retour</span>
          </div>
        </Link>


        <Link to={'..'}>
          <div className="flex flex-col justify-center items-center px-16 py-8 gap-3 border-[1px] border-gray-300 hover:font-semibold transition-all">
            <Award className="text-3xl hover:text-redColor transition-all" />
            <span className="text-center">Politique d'assistance</span>
          </div>
        </Link>


        <Link to={'..'}>
          <div className="flex flex-col justify-center items-center px-16 py-8 gap-3 border-[1px] border-gray-300 hover:font-semibold transition-all">
            <ExclamationCircle className="text-3xl hover:text-redColor transition-all" />
            <span className="text-center">Politique de confidentialité</span>
          </div>
        </Link>
      </div>

    </div>
  )
}