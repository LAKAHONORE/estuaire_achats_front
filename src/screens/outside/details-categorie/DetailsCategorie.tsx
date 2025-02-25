import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import FormationItem from "../components/FormationItem";

export default function DetailsCategorie() {

  const [seeFilter, setSeeFilter] = useState(false);

  return (
    <div className="flex flex-col w-full my-8 gap-y-8 px-4 md:px-20">

      <div className="flex flex-col lg:flex-row gap-10">

        <div className="hidden lg:flex flex-col h-full w-1/5 gap-y-10">

          <div className="flex flex-col w-full border-[1px] border-gray-300 p-5">
            <div className="flex flex-row w-full justify-between items-center">
              <h2 className="text-sm font-semibold">Catégories</h2>
              <ChevronDown />
            </div>
          </div>


          <div className="flex flex-col w-full border-[1px] border-gray-300 p-5">
            <div className="flex flex-row w-full justify-between items-center">
              <h2 className="text-sm font-semibold">Echelle des prix</h2>
            </div>

            <div className="flex flex-col py-4">
              <form className="w-full">
                <input type="range" className="w-full" name="" min={1} max={200000} id="" />
                <div className="flex flex-row justify-between items-center">
                  <span className="text-sm font-semibold">0 Fcfa</span>
                  <span className="text-sm font-semibold">200 000 Fcfa</span>
                </div>
              </form>
            </div>
          </div>


          <div className="flex flex-col w-full border-[1px] border-gray-300 p-5">
            <div className="flex flex-row w-full justify-between items-center">
              <h2 className="text-sm font-semibold">Fabric</h2>
              <ChevronDown />
            </div>
          </div>



          <div className="flex flex-col w-full border-[1px] border-gray-300 p-5">
            <div className="flex flex-row w-full justify-between items-center">
              <h2 className="text-sm font-semibold">Litre</h2>
              <ChevronDown />
            </div>
          </div>



          <div className="flex flex-col w-full border-[1px] border-gray-300 p-5">
            <div className="flex flex-row w-full justify-between items-center">
              <h2 className="text-sm font-semibold">Stockage</h2>
              <ChevronDown />
            </div>
          </div>

        </div>


        <div className="flex flex-col w-4/5 gap-y-6">

          <div className="flex gap-2">
            <span className="text-sm text-grayColor">Accueil / </span>
            <span className="text-sm text-grayColor">Toutes les catégories / </span>
            <span className="text-sm font-semibold uppercase">"PRODUITS COSMETIQUES"</span>
          </div>

          <div className="flex flex-col lg:flex-row w-full justify-between items-start">
            <h2 className="text-2xl font-semibold w-full lg:w-4/5">PRODUITS COSMETIQUES</h2>

            <div className="flex flex-col w-[50%] lg:w-1/5">
              <div className={`flex flex-row justify-between items-center gap-x-8 p-2 w-full border-[1px] border-redColor cursor-pointer rounded-sm ${seeFilter && 'bg-redColor text-whiteColor font-semibold'} transition`} onClick={() => setSeeFilter(!seeFilter)}>
                <span className="text-sm">Trier part</span>
                <ChevronDown className={`text-sm ${seeFilter ? 'rotate-180' : ''} duration-300`} />
              </div>


              {
                seeFilter && (
                  <ul className="flex flex-col justify-center bg-whiteColor py-4 gap-2 animate__animated animate__fadeIn duration-100" onClick={() => setSeeFilter(!seeFilter)}>
                    <li className="px-2 py-2 hover:text-whiteColor hover:bg-redColor transition cursor-pointer">Les plus récents</li>
                    <li className="px-2 py-2 hover:text-whiteColor hover:bg-redColor transition cursor-pointer">Les plus anciens</li>
                    <li className="px-2 py-2 hover:text-whiteColor hover:bg-redColor transition cursor-pointer">Prix croissants</li>
                    <li className="px-2 py-2 hover:text-whiteColor hover:bg-redColor transition cursor-pointer">Prix décroissants</li>
                  </ul>
                )
              }


            </div>
          </div>


          <div className="grid grid-cols-2 lg:grid-cols-5">
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
            <FormationItem img="/assets/img/produit.png" />
          </div>
        </div>

      </div>

    </div>
  )
}
