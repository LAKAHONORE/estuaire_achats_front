import { Link } from "react-router-dom";

type MarqueProps = {
  nom: string;
  img: string;
  lien: string;
}

export default function MarqueItem({nom, img, lien}: MarqueProps) {
  return (
    <Link to={lien} className="flex flex-col md:gap-6 justify-center hover:shadow-2xl shadow-black items-center bg-whiteColor border-[1px] p-4 md:p-0 border-gray-200 hover:scale-105 duration-300">
      <div className="flex flex-col justify-center items-center gap-y-6 py-0 md:py-10 px-4 md:px-16">
        <img src={img} className="w-16" alt="" />

      <span className="uppercase font-semibold text-center text-[13px] md:text-xl">{nom}</span>
      </div>
    </Link>
  )
}
