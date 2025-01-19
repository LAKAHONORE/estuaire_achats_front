import { useState } from "react";
import { DashCircle, PlusCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

type Link = { //typage des liens
  label: string;
  value: string;
  link?: string;
}

type ItemsProps = { //typage d'un élément items
  title: string;
  elements: Link[]; 
}

export default function ContactItem({title, elements} : ItemsProps) {

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
                <div className="flex flex-col">
                    <span className="text-grayColor font-semibold text-[13px]">{element.label}</span>
                    {
                      element.link ? (
                        <Link to={`mailto:${element.link}`} className="text-easyGrayColor text-[13px] hover:text-redColor transition">
                          {element.value}
                        </Link>
                      ) : (
                        <span className="text-easyGrayColor text-[13px]">{element.value}</span>
                      )
                    }
                </div>

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
