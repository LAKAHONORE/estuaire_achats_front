import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openChange, setOpenChange] = useState(false);

  return (
    <>
      <div className="hidden md:flex flex-row justify-between h-8 items-center px-16 bg-easyGrayColor">
        <div className="flex flex-row justify-center items-center gap-6">
          <li className="flex flex-col justify-start items-start" onClick={() => (setOpenLanguage(!openLanguage), setOpenChange(false))}>
            <div className="flex flex-row justify-center items-center gap-2 text-sm cursor-pointer" >
              <span className="text-darkColor">Langue</span>
              <ChevronDown className={`text-sm text-grayColor ${openLanguage && 'rotate-180'}`} />
            </div>

            {
              openLanguage && (
                <>
                  <div className="absolute h-full w-full top-8 inset-0" onClick={() => (setOpenChange(!openChange), setOpenLanguage(false))} />

                  <ul className="md:absolute sm:relative z-10 mt-6 mx-1 rounded-md items-center gap-2 bg-whiteColor w-[150px] py-2">
                    <li className="flex flex-row w-full">
                      <Link to={'..'} className="flex flex-row w-full px-3 items-center gap-2 py-2 hover:bg-redColor hover:text-whiteColor transition">
                        <img src="assets/flag/um.png" alt="en" className="w-4" />
                        <span className="text-sm">Anglais</span>
                      </Link>
                    </li>

                    <li className="flex flex-row w-full">
                      <Link to={'..'} className="flex flex-row w-full px-3 items-center gap-2 py-2 hover:bg-redColor hover:text-whiteColor transition">
                        <img src="assets/flag/fr.png" alt="en" className="w-4" />
                        <span className="text-sm">Français</span>
                      </Link>
                    </li>
                  </ul>
                </>
              )
            }
          </li>


          <li className="flex flex-col justify-start items-start" onClick={() => (setOpenChange(!openChange), setOpenLanguage(false))}>
            <div className="flex flex-row justify-center items-center gap-2 text-sm cursor-pointer" >
              <span className="text-darkColor">Xaf</span>
              <ChevronDown className={`text-sm text-grayColor ${openChange && 'rotate-180'}`} />
            </div>

            {
              openChange && (

                <>
                  <div className="absolute h-full w-full top-8 inset-0" onClick={() => (setOpenChange(!openChange), setOpenLanguage(false))} />

                  <ul className="md:absolute sm:relative z-10 mt-6 mx-1 rounded-md items-center gap-2 bg-whiteColor w-[150px] py-2">
                    <li className="flex flex-row w-full">
                      <Link to={'..'} className="flex flex-row w-full px-3 items-center gap-2 py-2 hover:bg-redColor hover:text-whiteColor transition">
                        <span className="text-sm">U.S. Dollars ($)</span>
                      </Link>
                    </li>

                    <li className="flex flex-row w-full">
                      <Link to={'..'} className="flex flex-row w-full px-3 items-center gap-2 py-2 hover:bg-redColor hover:text-whiteColor transition">
                        <span className="text-sm">Euro (€)</span>
                      </Link>
                    </li>

                    <li className="flex flex-row w-full">
                      <Link to={'..'} className="flex flex-row w-full px-3 items-center gap-2 py-2 hover:bg-redColor hover:text-whiteColor transition">
                        <span className="text-sm">Xaf (FCFA)</span>
                      </Link>
                    </li>
                  </ul>
                </>

              )
            }
          </li>

        </div>

        <div className="flex flex-row justify-center items-center gap-3">
          <Link to={'/shops/create'} className="text-sm">
            Become a Seller
          </Link>

          <div className="border-[1px] h-[20px] border-grayColor " />

          <Link to={'/seller/login'} className="text-sm">
            Login to Seller
          </Link>
        </div>
      </div>


      <div className="flex flex-row md:hidden justify-between h-8 items-center px-4 bg-easyGrayColor">
        <li className="flex flex-col justify-start items-start" onClick={() => (setOpenLanguage(!openLanguage), setOpenChange(false))}>
          <div className="flex flex-row justify-center items-center gap-2 text-sm cursor-pointer" >
            <span className="text-darkColor">Langue</span>
            <ChevronDown className={`text-sm text-grayColor ${openLanguage && 'rotate-180'}`} />
          </div>

          {
            openLanguage && (
              <>
                <div className="absolute h-full w-full top-8 inset-0" onClick={() => (setOpenChange(!openChange), setOpenLanguage(false))} />

                <ul className="absolute z-10 mx-1 mt-6 rounded-md items-center gap-2 bg-whiteColor w-[150px] py-2">
                  <li className="flex flex-row w-full">
                    <Link to={'..'} className="flex flex-row w-full px-3 items-center gap-2 py-2 hover:bg-redColor hover:text-whiteColor transition">
                      <img src="assets/flag/um.png" alt="en" className="w-4" />
                      <span className="text-sm">Anglais</span>
                    </Link>
                  </li>

                  <li className="flex flex-row w-full">
                    <Link to={'..'} className="flex flex-row w-full px-3 items-center gap-2 py-2 hover:bg-redColor hover:text-whiteColor transition">
                      <img src="assets/flag/fr.png" alt="en" className="w-4" />
                      <span className="text-sm">Français</span>
                    </Link>
                  </li>
                </ul>
              </>
            )
          }
        </li>


        <li className="flex flex-col justify-start items-end" onClick={() => (setOpenChange(!openChange), setOpenLanguage(false))}>
          <div className="flex flex-row justify-center items-center gap-2 text-sm cursor-pointer" >
            <span className="text-darkColor">Xaf</span>
            <ChevronDown className={`text-sm text-grayColor ${openChange && 'rotate-180'}`} />
          </div>

          {
            openChange && (

              <>
                <div className="absolute h-full w-full top-8 inset-0" onClick={() => (setOpenChange(!openChange), setOpenLanguage(false))} />

                <ul className="absolute z-10 mt-6 mx-1 rounded-md items-center gap-2 bg-whiteColor w-[150px] py-2">
                  <li className="flex flex-row w-full">
                    <Link to={'..'} className="flex flex-row w-full px-3 items-center gap-2 py-2 hover:bg-redColor hover:text-whiteColor transition">
                      <span className="text-sm">U.S. Dollars ($)</span>
                    </Link>
                  </li>

                  <li className="flex flex-row w-full">
                    <Link to={'..'} className="flex flex-row w-full px-3 items-center gap-2 py-2 hover:bg-redColor hover:text-whiteColor transition">
                      <span className="text-sm">Euro (€)</span>
                    </Link>
                  </li>

                  <li className="flex flex-row w-full">
                    <Link to={'..'} className="flex flex-row w-full px-3 items-center gap-2 py-2 hover:bg-redColor hover:text-whiteColor transition">
                      <span className="text-sm">Xaf (FCFA)</span>
                    </Link>
                  </li>
                </ul>
              </>

            )
          }
        </li>
      </div>
    </>

  )
}
