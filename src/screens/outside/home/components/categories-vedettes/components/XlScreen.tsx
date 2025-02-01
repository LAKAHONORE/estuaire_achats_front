import { ChevronRight } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default function XlScreen() {
  return (
    <div className="hidden md:flex flex-row justify-center w-full px-4 xl:px-10">
      <div className="grid grid-cols-3 gap-x-10">

        <div className="relative h-[400px] bg-no-repeat hover:scale-105 duration-300">

          <img src="assets/img/vedette1.jpg" className="h-full w-full " alt="" />

          <div className="absolute inset-0 flex justify-end items-end">
            <div className="flex flex-col h-[30%] w-full justify-end items-start p-6 bg-black bg-opacity-30 overflow-hidden">
              <Link to={'..'} className="flex flex-row items-center gap-2 uppercase text-easyGrayColor font-semibold hover:text-grayColor transition">
                <span >formation</span>
                <ChevronRight />
              </Link>

              <div className="grid md:grid-cols-1 lg:grid-cols-2 text-grayColor">
                <Link className="text-[13px]" to={'..'} > Comptabilité</Link>
                <Link className="text-[13px]" to={'..'} > Mathématique</Link>
                <Link className="text-[13px]" to={'..'} > Informatique</Link>
                <Link className="text-[13px]" to={'..'} > Commercialisation</Link>
              </div>

            </div>
          </div>

        </div>
        <div className="relative h-[400px] bg-no-repeat hover:scale-105 duration-300">

          <img src="assets/img/vedette1.jpg" className="h-full w-full " alt="" />

          <div className="absolute inset-0 flex justify-end items-end">
            <div className="flex flex-col h-[30%] w-full justify-end items-start p-6 bg-black bg-opacity-30 overflow-hidden">
              <Link to={'..'} className="flex flex-row items-center gap-2 uppercase text-easyGrayColor font-semibold hover:text-grayColor transition">
                <span >formation</span>
                <ChevronRight />
              </Link>

              <div className="grid md:grid-cols-1 lg:grid-cols-2 text-grayColor">
                <Link className="text-[13px]" to={'..'} > Comptabilité</Link>
                <Link className="text-[13px]" to={'..'} > Mathématique</Link>
                <Link className="text-[13px]" to={'..'} > Informatique</Link>
                <Link className="text-[13px]" to={'..'} > Commercialisation</Link>
              </div>

            </div>
          </div>

        </div>

        <div className="relative h-[400px] bg-no-repeat hover:scale-105 duration-300">

          <img src="assets/img/vedette1.jpg" className="h-full w-full " alt="" />

          <div className="absolute inset-0 flex justify-end items-end">
            <div className="flex flex-col h-[30%] w-full justify-end items-start p-6 bg-black bg-opacity-30 overflow-hidden">
              <Link to={'..'} className="flex flex-row items-center gap-2 uppercase text-easyGrayColor font-semibold hover:text-grayColor transition">
                <span >formation</span>
                <ChevronRight />
              </Link>

              <div className="grid md:grid-cols-1 lg:grid-cols-2 text-grayColor">
                <Link className="text-[13px]" to={'..'} > Comptabilité</Link>
                <Link className="text-[13px]" to={'..'} > Mathématique</Link>
                <Link className="text-[13px]" to={'..'} > Informatique</Link>
                <Link className="text-[13px]" to={'..'} > Commercialisation</Link>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>

  )
}
