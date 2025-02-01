import { CashCoin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function CouponSection() {
  return (
    <div className="relative w-full my-8 h-[500px] md:h-auto overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-[85%] p-12">
        <div className="flex flex-col w-full md:px-10 md:py-4 xs:py-16">
          <div className="flex flex-col md:justify-center items-center md:items-start md:flex-row gap-8">
            <div className="flex">
              <CashCoin className="text-white text-[70px]" />
            </div>
            <div className="flex flex-col justify-between items-center md:items-start gap-y-8 md:gap-y-4 lg:gap-y-16">
              <div className="flex flex-col gap-y-4">
                <span className="text-whiteColor text-2xl text-center md:text-start md:text-3xl font-semibold">Économisez jusqu’à 50 % avec nos coupons</span>
                <p className="text-grayColor text-center md:text-start text-xl" >Obtenez une réduction énorme sur les produits ou économisez de l’argent en utilisant des coupons lors du paiement.</p>
              </div>

              <div className="flex">
                <Link to={'..'} className="border-2 border-white text-white px-4 md:px-12 py-3 text-center font-semibold bg-grayColor rounded-full hover:bg-white hover:text-redColor transition">
                  Voir tous les codes promo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="assets/img/coupon.webp" className="w-full h-full" alt="" />
    </div>
  )
}
