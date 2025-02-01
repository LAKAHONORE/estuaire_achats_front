import { Link } from "react-router-dom";
import TitleSection from "../TitleSection";
import MarqueItem from "./components/MarqueItem";

export default function MeilleuresMarques() {
  return (
    //   <div className="flex flex-col px-4 my-16">

    //   <div className="flex flex-row justify-between items-center gap-6 text-grayColor cursor-pointer ">
    //     <TitleSection title="Meilleures marques"/>
    //     <div className="flex flex-row gap-6">
    //       <Link to={'..'} className="text-blueColor text-[13px] text-center hover:text-redColor hover:underline transition font-semibold">
    //         Voir toutes les marques
    //       </Link>
    //     </div>
    //   </div>



    // <div className="flex justify-center items-center w-full h-16 my-16">
    //     <div className="grid grid-cols-6">

    //     <MarqueItem nom="hp" lien=".." img="assets/marques/hp.webp"/>
    //     <MarqueItem nom="hp" lien=".." img="assets/marques/hp.webp"/>
    //     <MarqueItem nom="hp" lien=".." img="assets/marques/hp.webp"/>
    //     <MarqueItem nom="hp" lien=".." img="assets/marques/hp.webp"/>
    //     <MarqueItem nom="hp" lien=".." img="assets/marques/hp.webp"/>
    //     <MarqueItem nom="hp" lien=".." img="assets/marques/hp.webp"/>
    //     <MarqueItem nom="hp" lien=".." img="assets/marques/hp.webp"/>
    //     <MarqueItem nom="hp" lien=".." img="assets/marques/hp.webp"/>



    //     </div>
    // </div>


    // </div>

    <div className="flex flex-col w-full gap-12 h-auto px-6 md:px-10 py-16 my-16">

      <div className="flex flex-row justify-between w-full items-center gap-6 text-grayColor cursor-pointer ">
        <TitleSection title="Meilleures marques" />
        <div className="flex flex-row gap-6">
          <Link to={'..'} className="text-blueColor text-[13px] text-center hover:text-redColor hover:underline transition font-semibold">
            Voir toutes les marques
          </Link>
        </div>
      </div>


      <div className="flex w-full justify-center items-center">
        <div className="grid grid-cols-3 md:grid-cols-6">

          <MarqueItem nom="hp" lien=".." img="assets/marques/hp.webp" />
          <MarqueItem nom="canon" lien=".." img="assets/marques/canon.webp" />
          <MarqueItem nom="axe" lien=".." img="assets/marques/axe.webp" />
          <MarqueItem nom="apple" lien=".." img="assets/marques/apple.webp" />
          <MarqueItem nom="adidas" lien=".." img="assets/marques/adidas.webp" />
          <MarqueItem nom="acer" lien=".." img="assets/marques/acer.webp" />
          <MarqueItem nom="lenovo" lien=".." img="assets/marques/lenovo.webp" />
          <MarqueItem nom="louis vuiton" lien=".." img="assets/marques/louis vuiton.webp" />
          <MarqueItem nom="huawei" lien=".." img="assets/marques/huawei.webp" />
          <MarqueItem nom="or" lien=".." img="assets/marques/or.webp" />
          <MarqueItem nom="dove" lien=".." img="assets/marques/dove.webp" />



        </div>
      </div>

    </div>
  )
}
