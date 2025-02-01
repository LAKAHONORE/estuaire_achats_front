import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";


export default function CategoriesFilter() {

  const [firstFilter, setFirstFilter] = useState(false);

  return (
    <div className="hidden lg:flex flex-col">
      <div className="relative lg:flex flex-row items-center h-full gap-6 text-whiteColor cursor-pointer bg-red-700 px-4" onClick={() => setFirstFilter(!firstFilter)}>
        <span className="font-semibold">Categories</span>
        <Link to={'..'} className="hover:opacity-60 transition">
          (See All)
        </Link>
        <ChevronDown className={`duration-300 ${firstFilter ? 'rotate-180' : ''}`} />

      </div>

      <div className="flex flex-row w-full h-6 bg-purple-900">

      </div>


    </div>
  )
}
