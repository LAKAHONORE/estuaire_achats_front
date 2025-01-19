import { useState } from "react";
import { ArrowLeft, List, Person, Search, X } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

export default function MobileNav() {

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  return (

    <nav className="flex flex-row md:hidden justify-between items-center h-20 px-4 w-full top-8 overflow-hidden">
    {
      showSearchBar ? (
        <>
          <div className={`flex flex-row items-center gap-2 animate__animated animate__${showSearchBar && 'slideInDown'} duration-300`}>

            <ArrowLeft className="text-[30px] text-grayColor" onClick={() => setShowSearchBar(false)} />

            <SearchBar />
          </div>
        </>
      ) : (
        <>
          <div className={`flex flex-row md:hidden justify-between items-center w-full animate__animated animate__${!showSearchBar && 'slideInUp'} duration-300`}>
            <div className="flex flex-row justify-center items-center gap-2">
              <List className="text-[30px] text-grayColor" onClick={() => setMobileNav(true)} />
              <NavLink to={'..'}>
                <img src="assets/img/logo.png" className="w-20" alt="" />
              </NavLink>
            </div>

            <Search className=" text-grayColor" onClick={() => setShowSearchBar(true)} />
          </div>
        </>
      )
    }


    {
      mobileNav && (

        <div>
          <div className={`fixed h-full z-30 top-0 w-[80%] bg-easyGrayColor animate__animated animate__slideInLeft duration-300 p-6 ${mobileNav ? 'left-0 opacity-100' : 'left-[100%] opacity-0 '}`}>
            <div className="flex flex-row w-full">
              <X className="text-[30px] text-redColor" onClick={() => setMobileNav(false)} />
            </div>

            <div className="flex flex-row items-center my-6 gap-x-4">
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

            <div className="w-full h-[1px] bg-grayColor"/>


          <ul className="flex flex-col justify-start items-start gap-y-6 my-12 text-sm font-semibold">
              <li className="hover:text-redColor">
                <NavLink to={'..'}>
                  Accueil
                </NavLink>
              </li>


              <li className="hover:text-redColor">
                <NavLink to={'..'}>
                  Vente flash
                </NavLink>
              </li>

              <li className="hover:text-redColor">
                <NavLink to={'..'}>
                  Blog
                </NavLink>
              </li>


              <li className="hover:text-redColor">
                <NavLink to={'..'}>
                  Toutes les marques
                </NavLink>
              </li>

              <li className="hover:text-redColor">
                <NavLink to={'..'}>
                  Toutes les catégories
                </NavLink>
              </li>
              

              <li className="hover:text-redColor">
                <NavLink to={'..'}>
                  Assurance commerciale
                </NavLink>
              </li>

              <li className="hover:text-redColor">
                <NavLink to={'..'}>
                  Devis gratuit
                </NavLink>
              </li>
          </ul>
            
          </div>

          <div className={`fixed h-[100dvh] z-50 top-0 bg-black opacity-30 ${mobileNav ? 'right-0 w-[20%] animate__animated animate__slideInRight duration-300' : ''}`} onClick={() => setMobileNav(false)}>

          </div>
        </div>

      )
    }







  </nav>
  )
}
