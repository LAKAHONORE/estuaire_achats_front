import CategoriesVedettes from "./components/categories-vedettes/CategoriesVedettes";
import Hero from "./components/Hero";
import LinksVedettes from "./components/links-vedettes/LinksVedettes";
import MeilleuresVentes from "./components/meilleures-ventes/MeilleuresVentes";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesVedettes />
      <LinksVedettes />
      <MeilleuresVentes />
    </>
  )
}
