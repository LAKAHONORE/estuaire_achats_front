import { Funnel, Search, X } from "react-bootstrap-icons";
import PagesPath from "../components/pages-path/PagesPath";
import { useState } from "react";

export default function Blog() {
  const [mobileFilter, setMobileFilter] = useState(false);


  return (
    <div className="flex flex-col w-full my-8 gap-y-8 px-4 md:px-20">

      <div className="flex flex-col-reverse md:flex-row items-start gap-8">
        <div className="flex flex-col w-full md:w-2/5 gap-y-12">
          <form className="hidden md:flex flex-row border-[1px] border-gray-300">
            <input type="text" name="search" placeholder="Recherche ..." id="search" className="outline-none bg-transparent py-2 px-3  h-full w-full" />
            <button type="submit" className="text-xl px-2 bg-transparent hover:bg-gray-300 transition" >
              <Search className="text-grayColor" />
            </button>
          </form>


          <div className="hidden md:flex flex-col border-[1px] border-gray-300 px-4 py-4 h-28">
            <h2 className="text-black font-semibold">Catégories</h2>
          </div>


          <div className="flex flex-col border-[1px] border-gray-300 px-4 py-4 h-28">
            <h2 className="text-black font-semibold">Publications récents</h2>
          </div>

        </div>

        <div className="flex md:hidden justify-center items-center w-full">
          <Funnel className="text-4xl" onClick={() => setMobileFilter(!mobileFilter)} />
        </div>

        <PagesPath title="Blogs" />
      </div>


      {
        mobileFilter && (


          <div className="md:hidden">

            <div className={`fixed h-full z-30 top-0 w-[80%] bg-easyGrayColor animate__animated animate__slideInRight duration-100 p-4 ${mobileFilter ? 'right-0 opacity-100' : 'right-[100%] opacity-0 '}`}>

              <div className="flex flex-row justify-between items-center w-full">
                <h2 className="text-xl font-semibold">Filtres</h2>
                <X className="text-4xl" onClick={()=>setMobileFilter(!mobileFilter)}/>
              </div>

              <div className="w-full h-[1px] bg-gray-300" />


              <div className="flex flex-col w-full gap-y-12 mt-6">
                <form className="flex flex-row border-[1px] border-gray-300">
                  <input type="text" name="search" placeholder="Recherche ..." id="search" className="outline-none bg-transparent py-2 px-3 h-full w-full" />
                  <button type="submit" className="text-xl px-2 bg-transparent hover:bg-gray-300 transition" >
                    <Search className="text-grayColor" />
                  </button>
                </form>


                <div className="flex flex-col border-[1px] border-gray-300 px-4 py-4 h-28">
                  <h2 className="text-black font-semibold">Catégories</h2>
                </div>


              </div>



            </div>

            <div className={`fixed h-[100dvh] z-50 top-0 bg-black opacity-30 ${mobileFilter ? 'left-0 w-[20%] animate__animated animate__slideInLeft duration-300' : ''}`} onClick={() => setMobileFilter(false)}>

            </div>
          </div>
        )
      }
    </div>
  )
}
