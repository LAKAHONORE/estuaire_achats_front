import { Link } from "react-router-dom";

type MarqueProps = {
  nom: string;
  img: string;
  lien: string;
}

export default function MarqueItem({nom, img, lien}: MarqueProps) {
  return (
    <Link to={lien} className="flex flex-col md:gap-6 justify-center hover:shadow-xl shadow-black items-center bg-whiteColor h-[100px] w-[100px] md:h-[200px] md:w-[200px] border-[1px] p-4 md:p-0 border-gray-200 hover:scale-105 duration-300">
      <div className="flex justify-center items-center w-full">
        <img src={img} className="" alt="" />
      </div>

      <span className="uppercase font-semibold">{nom}</span>
    </Link>
  )
}
