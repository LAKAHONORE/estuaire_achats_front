import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Mobile() {
  const [current, setCurrent] = useState(0);
  const [currentTwo, setCurrentTwo] = useState(0);

  const slides = [
    {
      id: 1,
      nomCat: "Formation",
      img: "assets/img/vedettes.jpg",
    },
    {
      id: 2,
      nomCat: "Comptabilité",
      img: "assets/img/links3.jpg",

    },
    {
      id: 3,
      nomCat: "Programmation",
      img: "assets/img/links4.jpg",
    }
  ];


  const slidesTwo = [
    {
      id: 4,
      nomCat: "Formation",
      img: "assets/img/links3.jpg",
    },
    {
      id: 5,
      nomCat: "Comptabilité",
      img: "assets/img/links1.jpg",

    },
    {
      id: 6,
      nomCat: "Programmation",
      img: "assets/img/links5.jpg",
    }
  ];


  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1)
    else setCurrent(current - 1)
  }

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }


  const previousSlideTwo = () => {
    if (currentTwo === 0) setCurrentTwo(slidesTwo.length - 1)
    else setCurrentTwo(currentTwo - 1)
  }

  const nextSlideTwo = () => {
    if (currentTwo === slidesTwo.length - 1) setCurrentTwo(0)
    else setCurrentTwo(currentTwo + 1)
  }

  return (
    <>
        <div className="md:hidden w-full px-4 py-6 my-8 bg-gray-200">
          <div className="overflow-hidden relative">

            <div className="absolute z-10 h-[70%] w-full">
              <div className="flex flex-row justify-between items-center h-full w-full">
                <div className="p-4 bg-grayColor opacity-80 text-whiteColor hover:bg-redColor transition cursor-pointer" onClick={previousSlide}>
                  <ChevronLeft />
                </div>

                <div className="p-4 bg-grayColor opacity-80 text-whiteColor hover:bg-redColor transition cursor-pointer" onClick={nextSlide}>
                  <ChevronRight />
                </div>
              </div>
            </div>

            <div className={`flex transition ease-out duration-200`} style={{ transform: `translateX(-${current * 100}%)` }}>



              {
                slides.map((slide) => (
                  <Link key={slide.id} to={'..'} className="relative min-h-[400px] min-w-full hover:scale-105 duration-300">
                    <div className="relative h-[450px] w-full hover:scale-105 duration-300">
                      <div className="absolute inset-0" />
                      <img src={slide.img} className="h-full w-full " alt="" />
                    </div>
                  </Link>
                ))
              }


            </div>
          </div>
        </div>



        <div className="md:hidden w-full px-4 py-6 my-8">
          <div className="overflow-hidden relative">

            <div className="absolute z-10 h-[70%] w-full">
              <div className="flex flex-row justify-between items-center h-full w-full">
                <div className="p-4 bg-grayColor opacity-80 text-whiteColor hover:bg-redColor transition cursor-pointer" onClick={previousSlideTwo}>
                  <ChevronLeft />
                </div>

                <div className="p-4 bg-grayColor opacity-80 text-whiteColor hover:bg-redColor transition cursor-pointer" onClick={nextSlideTwo}>
                  <ChevronRight />
                </div>
              </div>
            </div>

            <div className={`flex transition ease-out duration-200`} style={{ transform: `translateX(-${currentTwo * 100}%)` }}>


              {
                slidesTwo.map((slideTwo) => (
                  <Link key={slideTwo.id} to={'..'} className="relative min-h-[400px] min-w-full hover:scale-105 duration-300">
                    <div className="relative h-[450px] w-full hover:scale-105 duration-300">
                      <div className="absolute inset-0" />
                      <img src={slideTwo.img} className="h-full w-full " alt="" />
                    </div>
                  </Link>
                ))
              }


            </div>
          </div>
        </div>
    </>
  )
}
