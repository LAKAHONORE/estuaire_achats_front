import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function SubHero() {


  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 200;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');

    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 200;
    }
  };


  return (
    <div className="flex w-full my-16 px-6 lg:px-10">
      <div className="flex flex-col w-full">
        <div className="flex">
          <img src="assets/img/sub_hero_img.jpg" alt="" />
        </div>
        <div className="flex justify-end items-center bg-redColor lg:px-16">

          <Link to={'/'} className="flex flex-col mt-6 text-easyGrayColor font-semibold hover:text-yellow-500 transition mx-8">
            Voir tout
          </Link>
        </div>

        <div className="flex justify-between items-center bg-redColor lg:px-16">
          <ChevronLeft className="text-easyGrayColor text-2xl cursor-pointer transition hover:scale-105 duration-300" onClick={slideLeft} />

          <div className="flex flex-col w-full justify-center items-center overflow-x-scroll scroll scroll-smooth scrollbar-hide my-8" id="slider">

            <div className="relative">
              <div className="flex gap-x-8">


                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/produit.png" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">10, 000 FCFA</span>
                </Link>

                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/sub_hero_2.jpg" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">20, 000 FCFA</span>
                </Link>


                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/produit.png" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">10, 000 FCFA</span>
                </Link>

                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/sub_hero_2.jpg" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">20, 000 FCFA</span>
                </Link>



                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/produit.png" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">10, 000 FCFA</span>
                </Link>

                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/sub_hero_2.jpg" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">20, 000 FCFA</span>
                </Link>



                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/produit.png" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">10, 000 FCFA</span>
                </Link>

                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/sub_hero_2.jpg" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">20, 000 FCFA</span>
                </Link>


                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/produit.png" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">10, 000 FCFA</span>
                </Link>

                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/sub_hero_2.jpg" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">20, 000 FCFA</span>
                </Link>


                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/produit.png" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">10, 000 FCFA</span>
                </Link>

                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/sub_hero_2.jpg" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">20, 000 FCFA</span>
                </Link>


                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/produit.png" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">10, 000 FCFA</span>
                </Link>

                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/sub_hero_2.jpg" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">20, 000 FCFA</span>
                </Link>


                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/produit.png" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">10, 000 FCFA</span>
                </Link>

                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/sub_hero_2.jpg" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">20, 000 FCFA</span>
                </Link>


                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/produit.png" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">10, 000 FCFA</span>
                </Link>

                <Link to={'/'} className="flex flex-col gap-y-6">
                  <div className="flex h-20 w-20 rounded-full overflow-hidden">
                    <img src="assets/img/sub_hero_2.jpg" className="hover:scale-105 duration-300" alt="" />
                  </div>

                  <span className="text-easyGrayColor font-semibold text-center text-[15px]">20, 000 FCFA</span>
                </Link>






              </div>
            </div>
          </div>


          <ChevronRight className="text-easyGrayColor text-2xl transition hover:scale-105 cursor-pointer duration-300" onClick={slideRight} />

        </div>
      </div>
    </div>
  )
}
