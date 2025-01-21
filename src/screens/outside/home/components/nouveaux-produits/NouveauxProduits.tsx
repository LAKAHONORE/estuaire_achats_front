import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import FormationItem from "../../../components/FormationItem";
import { Link } from "react-router-dom";
import TitleSection from "../TitleSection";

export default function NouveauxProduits() {

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 250;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');

    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 250;
    }
  };

  return (
    <div className="flex flex-col px-4 lg:px-48">

      <div className="flex flex-row justify-between items-center gap-6 text-grayColor cursor-pointer ">
        <TitleSection title="Nouveaux produits"/>
        <div className="flex flex-row justify-center items-center gap-6">
          <ChevronLeft className="hover:text-darkColor transition hover:scale-105 duration-300" onClick={slideLeft} />
          <Link to={'..'} className="text-blueColor text-[13px] text-center hover:text-redColor hover:underline transition font-semibold">
            Tout voir
          </Link>
          <ChevronRight className="hover:text-darkColor transition hover:scale-105 duration-300" onClick={slideRight} />
        </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center overflow-x-scroll scroll scroll-smooth scrollbar-hide my-8" id="slider">

        <div className="relative">
          <div className="flex ">

            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />
            <FormationItem img="assets/img/produit.png" />

          </div>
        </div>
      </div>
    </div>
  )
}
