import { ArrowLeftRight, BellFill, CartFill, ChevronDown, HeartFill, Person } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

export default function XlMobileNav() {
  return (
    <nav className="hidden md:flex flex-col h-32 w-full top-8 overflow-hidden">
      <div className="flex flex-row h-20 justify-between items-center gap-4 px-16">
        <NavLink to={'..'}>
          <img src="assets/img/logo.png" className="w-32" alt="" />
        </NavLink>

        <div className="w-3/5">
          <SearchBar />
        </div>

        <ul className="flex flex-row justify-center items-center gap-6">
          <li>
            <NavLink to={'..'} className="">
              <ArrowLeftRight className="text-grayColor hover:text-redColor transition" />
            </NavLink>
          </li>

          <li>
            <NavLink to={'..'} className="">
              <HeartFill className="text-grayColor hover:text-redColor transition" />
            </NavLink>
          </li>

          <li className="hidden lg:flex">
            <NavLink to={'..'} className="">
              <BellFill className="text-grayColor hover:text-redColor transition" />
            </NavLink>
          </li>
        </ul>

        <div className="hidden lg:flex flex-row justify-center items-center gap-4">
          <div className="text-2xl border-[1px] p-2 rounded-full text-grayColor cursor-pointer hover:scale-105 duration-300 hover:text-redColor hover:border-redColor">
            <Person />
          </div>

          <Link to={'..'} className="text-sm hover:text-redColor transition">
            Login
          </Link>

          <div className="border-[1px] h-[20px] border-grayColor " />

          <Link to={'..'} className="text-sm hover:text-redColor transition">
            Registration
          </Link>
        </div>

      </div>

      <div className="flex flex-row h-12 w-full justify-center lg:justify-between items-center bg-redColor gap-2 px-16">
        <div className="flex h-full gap-12">
          <div className="hidden lg:flex flex-row items-center gap-6 text-whiteColor cursor-pointer bg-red-700 px-4">
            <span className="font-semibold">Categories</span>
            <Link to={'..'} className="hover:opacity-60 transition">
              (See All)
            </Link>
            <ChevronDown />
          </div>

          <div className="flex flex-row  justify-center items-center gap-3">
            <Link to={'..'} className="flex justify-center items-center px-4 lg:px-6 h-full text-whiteColor capitalize font-semibold text-sm hover:bg-red-700 transition">
              <div>
                home
              </div>
            </Link>


            <Link to={'..'} className="flex justify-center items-center px-4 lg:px-6 h-full text-whiteColor capitalize font-semibold text-sm hover:bg-red-700 transition">
              <div>
                flash sale
              </div>
            </Link>

            <Link to={'..'} className="flex justify-center items-center px-4 lg:px-6 h-full text-whiteColor capitalize font-semibold text-sm hover:bg-red-700 transition">
              <div>
                all brands
              </div>
            </Link>


            <Link to={'..'} className="flex justify-center items-center px-4 lg:px-6 h-full text-whiteColor capitalize font-semibold text-sm hover:bg-red-700 transition">
              <div>
                all categories
              </div>
            </Link>


            <Link to={'..'} className="flex justify-center items-center px-4 lg:px-6 h-full text-whiteColor capitalize font-semibold text-sm hover:bg-red-700 transition">
              <div>
                trade ansurance
              </div>
            </Link>


            <Link to={'..'} className="flex justify-center items-center px-4 lg:px-6 h-full text-whiteColor capitalize font-semibold text-sm hover:bg-red-700 transition">
              <div>
                free quote
              </div>
            </Link>

          </div>
        </div>

        <div className="hidden lg:flex h-full">
          <Link to={'..'} className="flex flex-row items-center gap-3 px-6 bg-red-700 transition">
            <CartFill className="text-2xl text-whiteColor" />
            <span className="text-whiteColor font-semibold uppercase">0 FCFA</span>
            <sub className="text-whiteColor text-[10px] font-semibold opacity-70">(0 items)</sub>
          </Link>
        </div>
      </div>

    </nav>
    
  )
}
