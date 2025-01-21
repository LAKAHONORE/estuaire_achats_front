import { ArrowLeftRight, ChevronRight, Heart, PatchCheckFill,  StarFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

type Props = {
  img: string
}


export default function BestSellerItem({ img }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-4 py-6 h-auto w-[250px] overflow-hidden group">
      <div className="relative">

        <Link to={'..'} className="overflow-hidden">
          <img src={img} className="hover:scale-105 duration-300" alt="" />
        </Link>

        <div className="absolute top-0 right-0 text-3xl bg-[#84b668] py-4 px-1 text-easyGrayColor text-[13px] font-semibold">
          <PatchCheckFill />
        </div>

        <div className="hidden group-hover:block absolute right-0 top-0 animate__animated animate__slideInRight duration-700">
          <Link to={'..'} className="block p-2 rounded-md bg-grayColor text-white m-4">
            <Heart />
          </Link>

          <Link to={'..'} className="block p-2 rounded-md bg-grayColor text-white m-4">
            <ArrowLeftRight />
          </Link>
        </div>

      </div>


      <div className="flex flex-row justify-center text-[13px] items-center w-full">
        <Link to={'..'} className="text-black capitalize hover:text-redColor font-semibold py-2 px-4 ">
          <span >visiter le magasin</span>
          {/* <span className="hidden"> <CartFill className="text-2xl text-whiteColor" /></span> */}
        </Link>
      </div>

      <div className="flex flex-row justify-center gap-1 items-center w-full">
        <div className="flex flex-row gap-1 text-grayColor">
          <StarFill className="text-[13px]" />
          <StarFill className="text-[13px]" />
          <StarFill className="text-[13px]" />
          <StarFill className="text-[13px]" />
          <StarFill className="text-[13px]" />
        </div>

        <span className="text-[13px]">
          (0 Commentaires)
        </span>
      </div>


      <div className="flex flex-row justify-center text-[13px] items-center animate__animated animate__slideInLeft duration-50 w-full">
        <div className="flex p-4 bg-yellow-100 rounded-full text-redColor">
          <ChevronRight />
        </div>
        <Link to={'..'} className="text-black uppercase font-semibold py-2 px-4 groupB">
          <span className="groupB-hover:hidden">visiter le magasin</span>
          {/* <span className="hidden"> <CartFill className="text-2xl text-whiteColor" /></span> */}
        </Link>
      </div>

    </div>
  )
}
