import { useState } from "react";
import { DashCircle, PlusCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

type Link = { //typage des liens
  label: string;
  span? : string; //pour gérer spécialement le lien "devenz un vendeur..."
  link: string;
}

type ItemsProps = { //typage d'un élément items
  title: string;
  elements: Link[];
}

export default function ItemsLinks({ title, elements }: ItemsProps) {

  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between items-center bg-black p-4 font-semibold border-t-[1px] border-b-[1px] border-gray-600" onClick={() => setShowLinks(!showLinks)}>
        <span className="text-easyGrayColor">{title}</span>
        {
          showLinks ? (
            <DashCircle className="text-grayColor" />
          ) : (
            <PlusCircle className="text-grayColor" />
          )
        }
      </div>

      {
        showLinks && (
          <ul className={`flex flex-col w-full px-6 my-4 gap-2`}>
            {
              elements.map((element, index) => (
                <div key={index}>
                  <li >
                    <Link to={element.link} className="flex flex-row items-center gap-2 text-grayColor text-[13px] font-semibold hover:text-redColor transition">
                      <span>{element.label}</span>
                      {
                        element.span && <span className="text-xs text-yellow-500">{element.span}</span>
                      }
                    </Link>
                  </li>

                  <div className="h-[1px] w-full bg-gray-600" />

                </div>
              ))
            }

          </ul>
        )
      }
    </div>
  )
}
