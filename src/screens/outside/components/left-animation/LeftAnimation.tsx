import { useState } from "react";
import { ChevronDoubleRight, ChevronRight, Clock, LightningFill, List } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import 'animate.css'

export default function LeftAnimation() {
  const [showFloatBtn, steShowFloatBtn] = useState(false);
  return (
    <>
      <div className="hidden md:block animate__animated animate__slideInLeft duration-75">
        <div className="fixed z-40 mx-2 md:mx-4 translate-y-52">

          <Link to={'..'} className="fixed w-12 h-12 overflow-hidden rounded-full hover:w-44 group duration-300 origin-left bg-redColor cursor-pointer">
            <span className="absolute w-12 h-12 flex justify-center items-center opacity-100 group-hover:opacity-0 duration-200">
              <List className="text-2xl text-whiteColor" />
            </span>
            <div
              className="w-full h-full flex flex-row justify-between items-center text-whiteColor whitespace-nowrap -translate-x-1/3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 px-4"
            >
              <List className="text-2xl text-whiteColor" />

              <span>
                All Categories
              </span>
              <ChevronRight className="text-whiteColor" />

            </div>
          </Link>

          <Link to={'..'} className="fixed w-12 h-12 overflow-hidden rounded-full hover:w-44 group duration-300 origin-left bg-redColor my-20 cursor-pointer">
            <span className="absolute w-12 h-12 flex justify-center items-center opacity-100 group-hover:opacity-0 duration-200">
              <LightningFill className="text-2xl text-whiteColor" />
            </span>
            <div
              className="w-full h-full flex flex-row justify-between items-center text-whiteColor whitespace-nowrap -translate-x-1/3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 px-4"
            >
              <LightningFill className="text-2xl text-whiteColor" />

              <span>
                Flash Sale
              </span>
              <ChevronRight className="text-whiteColor" />

            </div>
          </Link>


          <Link to={'..'} className="fixed w-12 h-12 overflow-hidden rounded-full hover:w-44 group duration-300 origin-left bg-redColor my-40 cursor-pointer">
            <span className="absolute w-12 h-12 flex justify-center items-center opacity-100 group-hover:opacity-0 duration-200">
              <Clock className="text-2xl text-whiteColor" />
            </span>
            <div
              className="flex flex-row w-[full] h-full justify-between items-center text-whiteColor whitespace-nowrap -translate-x-1/3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 px-4"
            >
              <Clock className="text-2xl text-whiteColor" />
              <span>
                Total Deal
              </span>
              <ChevronRight className="text-whiteColor" />
            </div>
          </Link>
        </div>
      </div>


      <div className="fixed md:hidden z-40 mx-1 translate-y-36 bg-yellow-500 p-2 rounded-full" onClick={() => steShowFloatBtn(!showFloatBtn)}>
        <ChevronDoubleRight className={`text-easyGrayColor ${showFloatBtn ? 'rotate-180 ' : ''} duration-700`} />
      </div>

      {
        showFloatBtn && (
          <div className={`fixed md:hidden z-40 mx-3 translate-y-52`}>

            <Link to={'..'} className="fixed w-12 h-12 overflow-hidden rounded-full hover:w-44 group duration-75 bg-redColor cursor-pointer animate__animated animate__slideInLeft">
              <span className="absolute w-12 h-12 flex justify-center items-center opacity-100 group-hover:opacity-0 duration-200">
                <List className="text-2xl text-whiteColor" />
              </span>
              <div
                className="w-full h-full flex flex-row justify-between items-center text-whiteColor whitespace-nowrap -translate-x-1/3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 px-4"
              >
                <List className="text-2xl text-whiteColor" />

                <span>
                  All Categories
                </span>
                <ChevronRight className="text-whiteColor" />

              </div>
            </Link>

            <Link to={'..'} className="fixed w-12 h-12 overflow-hidden rounded-full hover:w-44 group duration-75 bg-redColor cursor-pointer animate__animated animate__slideInLeft my-20">
              <span className="absolute w-12 h-12 flex justify-center items-center opacity-100 group-hover:opacity-0 duration-200">
                <LightningFill className="text-2xl text-whiteColor" />
              </span>
              <div
                className="w-full h-full flex flex-row justify-between items-center text-whiteColor whitespace-nowrap -translate-x-1/3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 px-4"
              >
                <LightningFill className="text-2xl text-whiteColor" />

                <span>
                  Flash Sale
                </span>
                <ChevronRight className="text-whiteColor" />

              </div>
            </Link>


            <Link to={'..'} className="fixed w-12 h-12 overflow-hidden rounded-full hover:w-44 group duration-75 bg-redColor cursor-pointer animate__animated animate__slideInLeft my-40">
              <span className="absolute w-12 h-12 flex justify-center items-center opacity-100 group-hover:opacity-0 duration-200">
                <Clock className="text-2xl text-whiteColor" />
              </span>
              <div
                className="flex flex-row w-[full] h-full justify-between items-center text-whiteColor whitespace-nowrap -translate-x-1/3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 px-4"
              >
                <Clock className="text-2xl text-whiteColor" />
                <span>
                  Total Deal
                </span>
                <ChevronRight className="text-whiteColor" />
              </div>
            </Link>
          </div>
        )
      }

    </>
  )
}
