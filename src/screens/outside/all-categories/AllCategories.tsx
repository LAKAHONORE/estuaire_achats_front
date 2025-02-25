import PagesPath from "../components/pages-path/PagesPath";
import CategorieItem from "./components/categorie-item/CategorieItem";

export default function AllCategories() {
  const elementsCosmetiques = [
    {
      title: "Cosmétiques femme",
      link: ".."
    },
    {
      title: "Cosmétiques Homme",
      link: ".."
    },
    {
      title: "Cosmétiques mixte",
      link: ".."
    },
  ];

  const elementsFormations = [
    {
      title: "Informatiques",
      link: ".."
    },
    {
      title: "Mathématiques",
      link: ".."
    },
    {
      title: "Agriculture",
      link: ".."
    },
    {
      title: "Commercialisation",
      link: ".."
    }, 
    {
      title: "Monnaie virtuelle",
      link: ".."
    }, 
    {
      title: "Informatique système",
      link: ".."
    }, 
    {
      title: "Informatique programmation",
      link: ".."
    }, 
    {
      title: "Informatique programmation",
      link: ".."
    }, 
    {
      title: "Ressource humaine",
      link: ".."
    }, 
    {
      title: "Musique DJ",
      link: ".."
    }, 
    {
      title: "Microsoft",
      link: ".."
    }, 
    {
      title: "Gestion de projets",
      link: ".."
    },
  ];


  return (
    <div className="flex flex-col w-full my-8 gap-y-8 px-4 md:px-20">
      <PagesPath title="Toutes catégories" />


      <CategorieItem img="assets/img/categorie.jpeg" title="PRODUITS COSMETIQUES" titleLink="/category/cosmetique" elements={elementsCosmetiques} />

      <CategorieItem img="assets/img/links4.jpg" title="HYGIENE ET SANTE" titleLink="/category/hygiene-sante" />

      <CategorieItem img="assets/img/technology.jpeg" title="FORMATIONS" titleLink="/category/formations" elements={elementsFormations} />

      <CategorieItem img="assets/img/produit.png" title="alimentation" titleLink="/category/alimentaion" />



    </div>
  )
}
