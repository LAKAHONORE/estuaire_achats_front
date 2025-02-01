import { Bell, Cart, HouseDoor, Person, UiRadiosGrid } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

export default function BottomNavigationBar() {
  return (
    <div className="fixed md:hidden bottom-0 w-full h-12 z-20 opacity-90 bg-white">
        <div className="flex flex-row justify-between px-4 items-center py-2">
          <NavLink to={'..'} className="flex flex-col text-redColor justify-center items-center gap-2 transition-all">
            <HouseDoor className="" />
            <span className="text-[10px]">Accueil</span>
          </NavLink>

          <NavLink to={'..'} className="flex flex-col text-grayColor hover:text-redColor justify-center items-center gap-2 transition-all">
            <UiRadiosGrid  className="" />
            <span className="text-[10px]">Catégories</span>
          </NavLink> 


          <NavLink to={'..'} className="flex flex-col text-grayColor hover:text-redColor justify-center items-center gap-2 transition-all">
            <Cart  className="" />
            <span className="text-[10px]">Chariot (0)</span>
          </NavLink> 


          <NavLink to={'..'} className="flex flex-col text-grayColor hover:text-redColor justify-center items-center gap-2 transition-all">
            <Bell  className="" />
            <span className="text-[10px]">Notification</span>
          </NavLink> 


          <NavLink to={'..'} className="flex flex-col text-grayColor hover:text-redColor justify-center items-center gap-2 transition-all">
            <Person  className="" />
            <span className="text-[10px]">Mon compte</span>
          </NavLink> 
        </div>
    </div>
  )
}
