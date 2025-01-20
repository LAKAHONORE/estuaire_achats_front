import { ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

type Props = {
  nomCat: string;
  img: string;
}


export default function MobileItems({nomCat, img}: Props) {

  const formations = [
    {
      title : "Informatiques",
      link : ".."
    },
    {
      title : "Mathématques",
      link : ".."
    },
    {
      title : "Agriculture",
      link : ".."
    }
  ]

  return (
    <div className="relative min-h-[400px] min-w-full hover:scale-105 duration-300">

      <img src={img} className="h-full w-full " alt="" />

      <div className="absolute inset-0 flex justify-end items-end">
        <div className="flex flex-col h-[30%] w-full justify-end items-start p-6 bg-black bg-opacity-30">
          <Link to={'..'} className="flex flex-row items-center gap-2 uppercase text-easyGrayColor font-semibold hover:text-grayColor transition">
            <span >{nomCat}</span>
            <ChevronRight />
          </Link>

          <div className="grid grid-cols-2 text-grayColor">
              {
                formations.map((formation, i) => (
                    <Link key={i} to={formation.link} >{formation.title}</Link>
                ))
              }
          </div>

        </div>
      </div>

    </div>
  )
}
