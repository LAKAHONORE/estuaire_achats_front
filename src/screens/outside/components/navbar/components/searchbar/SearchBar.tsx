import { Search } from 'react-bootstrap-icons'

export default function SearchBar() {
  return (
      <form className="flex flex-row justify-center items-center ">
        <div className="flex flex-row justify-between items-center w-full border-[1px] border-grayColor gap-x-1 py-1 md:p-2 rounded-full hover:border-[2px] hover:border-redColor transition">
          <input type="text" name="search" placeholder="I am shopping for ..." id="" className="outline-none bg-transparent w-full px-4" />
          <Search className="text-grayColor mx-6"/>
        </div>
      </form>
  )
}
