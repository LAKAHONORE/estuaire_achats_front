import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import BestSellerItem from "./components/BestSellerItem";
import TitleSection from "../TitleSection";


export default function BestSellers() {

  const slideLeftThree = () => {
    const sliderThree = document.getElementById('sliderThree');
    if (sliderThree) {
      sliderThree.scrollLeft = sliderThree.scrollLeft - 250;
    }
  };

  const slideRightThree = () => {
    const sliderThree = document.getElementById('sliderThree');

    if (sliderThree) {
      sliderThree.scrollLeft = sliderThree.scrollLeft + 250;
    }
  };
  return (
    <div className="flex flex-col my-16 px-4 lg:px-10">

      <div className="flex flex-row justify-between items-center gap-6 text-grayColor cursor-pointer ">
        <TitleSection title="Meilleurs ventes"/>
        <div className="flex flex-row justify-center text-[13px] items-center">
          <ChevronLeft className="hover:text-darkColor transition hover:scale-105 duration-300" onClick={slideLeftThree} />
          <Link to={'..'} className="text-blueColor hover:text-redColor text-center hover:underline transition font-semibold">
            Voir tous les vendeurs
          </Link>
          <ChevronRight className="hover:text-darkColor transition hover:scale-105 duration-300" onClick={slideRightThree} />
        </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center overflow-x-scroll scroll scroll-smooth scrollbar-hide my-8" id="sliderThree">

        <div className="relative">
          <div className="flex ">

            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />
            <BestSellerItem img="assets/img/seller.png" />

          </div>
        </div>
      </div>
    </div>
  )
}
