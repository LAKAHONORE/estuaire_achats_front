import PagesPath from "../components/pages-path/PagesPath"

export default function FlashDeals() {
  return (
    <div className="flex flex-col w-full my-8 gap-y-8 px-4 md:px-20">
      <PagesPath title="offres flash" />

      <div className="flex flex-col w-full h-auto overflow-hidden">
        <img src="assets/img/flash-deals-img.webp" className="object-contain hover:scale-105 duration-700" alt="" />
      </div>
    </div>
  )
}
