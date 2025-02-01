import { Link } from "react-router-dom";

export default function XlScreen() {
  return (
    <div className="hidden md:flex flex-col justify-center items-center w-full px-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full bg-gray-200 px-16 lg:px-10 gap-8 py-6 my-8">
        <Link to={'..'}  className="overflow-hidden">
          <div className="relative h-[450px] w-[450px] hover:scale-105 duration-300">
            <div className="absolute inset-0" />
            <img src="assets/img/links1.jpg" className="h-full w-full " alt="" />
          </div>
        </Link>

        <Link to={'..'} className="overflow-hidden">
          <div className="relative h-[450px] w-[450px] hover:scale-105 duration-300">
          <div className="absolute inset-0" />
            <img src="assets/img/vedettes.jpg" className="h-full w-full " alt="" />
          </div>
        </Link>

        <Link to={'..'} className="overflow-hidden">
          <div className="relative h-[450px] w-[450px] hover:scale-105 duration-300">
            <div className="absolute inset-0" />
            <img src="assets/img/links3.jpg" className="h-full w-full " alt="" />
          </div>
        </Link>
      </div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full px-16 lg:px-10 gap-8 py-6 my-8">
        <Link to={'..'} className="overflow-hidden">
          <div className="relative h-[450px] w-[450px] hover:scale-105 duration-300">
          <div className="absolute inset-0" />
            <img src="assets/img/links4.jpg" className="h-full w-full " alt="" />
          </div>
        </Link>

        <Link to={'..'} className="overflow-hidden">
          <div className="relative h-[450px] w-[450px] hover:scale-105 duration-300">
          <div className="absolute inset-0" />
            <img src="assets/img/links5.jpg" className="h-full w-full " alt="" />
          </div>
        </Link>

        <Link to={'..'} className="overflow-hidden">
          <div className="relative h-[450px] w-[450px] hover:scale-105 duration-300">
          <div className="absolute inset-0" />
            <img src="assets/img/vedettes.jpg" className="h-full w-full " alt="" />
          </div>
        </Link>
      </div>
    </div>
  )
}
