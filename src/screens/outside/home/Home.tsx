import BestSellers from "./components/best-sellers/BestSellers";
import CategoriesVedettes from "./components/categories-vedettes/CategoriesVedettes";
import CouponSection from "./components/coupon-section/CouponSection";
import Hero from "./components/Hero";
import LinksVedettes from "./components/links-vedettes/LinksVedettes";
import MeilleuresMarques from "./components/meilleures-marques/MeilleuresMarques";
import MeilleuresVentes from "./components/meilleures-ventes/MeilleuresVentes";
import NouveauxProduits from "./components/nouveaux-produits/NouveauxProduits";
import SubHero from "./components/sub-hero/SubHero";

export default function Home() {
  return (
    <>
      <Hero />
      <SubHero />
      <CategoriesVedettes />
      <LinksVedettes />
      <MeilleuresVentes />
      <NouveauxProduits />
      <CouponSection />
      <BestSellers />
      <MeilleuresMarques />
    </>
  )
}
