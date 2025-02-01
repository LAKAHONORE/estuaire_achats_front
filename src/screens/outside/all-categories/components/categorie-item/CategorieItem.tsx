import { Link } from "react-router-dom";

type LinkItems = {
  title: string;
  link: string;
}

type CategorieItemProps = {
  img: string;
  title: string;
  titleLink: string;
  elements?: LinkItems[];
}
export default function CategorieItem({ img, title, titleLink, elements }: CategorieItemProps) {
  return (
    <div className="flex flex-col border-[1px] border-gray-300 py-8 px-6 gap-y-10">

      <div className="flex flex-row gap-6 items-center">
        <div className="border-[1px] border-gray-300 p-1">
          <img src={img} className="w-14 h-14 object-contain" alt="" />
        </div>
        <Link to={titleLink} className="uppercase text-xl md:text-2xl font-semibold hover:text-redColor transition">
          {title}
        </Link>
      </div>


      <div className="flex flex-col md:grid grid-cols-5 gap-6">
        {
          elements?.map((element, i) => (
            <Link to={element.link} key={i} className="font-semibold text-sm hover:text-redColor transition capitalize">
              {element.title}
            </Link>
          ))
        }
      </div>

    </div>
  )
}
