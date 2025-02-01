import PagesPath from "../components/pages-path/PagesPath";
import MarqueItem from "../home/components/meilleures-marques/components/MarqueItem";

export default function Brands() {
  return (
    <div className="flex flex-col w-full my-8 gap-y-8 px-4 md:px-20">
      <PagesPath title="Toutes les marques" />



      <div className="flex flex-row justify-center w-full">
        <div className="grid grid-cols-3 md:grid-cols-6">

          <MarqueItem nom="hp" lien=".." img="assets/marques/hp.webp" />
          <MarqueItem nom="canon" lien=".." img="assets/marques/canon.webp" />
          <MarqueItem nom="axe" lien=".." img="assets/marques/axe.webp" />
          <MarqueItem nom="apple" lien=".." img="assets/marques/apple.webp" />
          <MarqueItem nom="adidas" lien=".." img="assets/marques/adidas.webp" />
          <MarqueItem nom="acer" lien=".." img="assets/marques/acer.webp" />
          <MarqueItem nom="lenovo" lien=".." img="assets/marques/lenovo.webp" />
          <MarqueItem nom="louis vuiton" lien=".." img="assets/marques/louis vuiton.webp" />
          <MarqueItem nom="huawei" lien=".." img="assets/marques/huawei.webp" />
          <MarqueItem nom="or" lien=".." img="assets/marques/or.webp" />
          <MarqueItem nom="dove" lien=".." img="assets/marques/dove.webp" />
          <MarqueItem nom="asus" lien=".." img="assets/marques/asus.webp" />
          <MarqueItem nom="beauty" lien=".." img="assets/marques/beauty.png" />
          <MarqueItem nom="dell" lien=".." img="assets/marques/dell.webp" />
          <MarqueItem nom="starlink" lien=".." img="assets/marques/starlink.png" />
          <MarqueItem nom="dior" lien=".." img="assets/marques/dior.webp" />
        </div>
      </div>


    </div>
  )
}
