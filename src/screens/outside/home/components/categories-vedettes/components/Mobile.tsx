import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import MobileItems from './mobile-items/MobileItems';
import { useState } from 'react';


export default function Mobile() {

  const [current, setCurrent] = useState(0);

  const slides = [
    {
      id : 1,
      nomCat : "Formation",
      img : "assets/img/vedette1.jpg",
    },
    {
      id : 2,
      nomCat : "Comptabilité",
      img : "assets/img/vedettes.jpg",

    },
    {
      id : 3,
      nomCat : "Programmation",
      img : "assets/img/technology.jpeg",
    }
  ];


  const previousSlide = () => {
    if(current === 0) setCurrent(slides.length - 1)
    else setCurrent(current - 1)
  }

  const nextSlide = () => {
    if(current === slides.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }


  return (
    <div className="md:hidden w-full px-4">
      <div className="overflow-hidden relative">

        <div className="absolute z-10 h-[70%] w-full px-4 ">
          <div className="flex flex-row justify-between items-end h-full w-full">
            <div className="p-4 bg-grayColor text-whiteColor rounded-full hover:bg-redColor transition cursor-pointer" onClick={previousSlide}>
              <ChevronLeft />
            </div>

            <div className="p-4 bg-grayColor text-whiteColor rounded-full hover:bg-redColor transition cursor-pointer" onClick={nextSlide}>
              <ChevronRight />
            </div>
          </div>
        </div>

        <div className={`flex transition ease-out duration-200`} style={{ transform : `translateX(-${current * 100}%)` }}>



        {
          slides.map((slide) => (
            <MobileItems  key={slide.id} {...slide}/>
          ))
        }


        </div>
      </div>
    </div>
  )
}
