import TitleSection from "../TitleSection";
import Mobile from "./components/Mobile";
import XlScreen from "./components/XlScreen";

export default function CategoriesVedettes() {



  return (
    <div className="flex flex-col w-full gap-6 px-6 lg:px-10 my-20">
      <TitleSection title="Catégories en vedette" />

      <XlScreen />

      <Mobile />

    </div>
  )
}
