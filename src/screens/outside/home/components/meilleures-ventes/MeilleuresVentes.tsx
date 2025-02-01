import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import FormationItem from "../../../components/FormationItem";


export default function MeilleuresVentes() {


  const slideLeftTwo = () => {
    const sliderTwo = document.getElementById('sliderTwo');
    if (sliderTwo) {
      sliderTwo.scrollLeft = sliderTwo.scrollLeft - 250;
    }
  };

  const slideRightTwo = () => {
    const sliderTwo = document.getElementById('sliderTwo');

    if (sliderTwo) {
      sliderTwo.scrollLeft = sliderTwo.scrollLeft + 250;
    }
  };


  return (

    <div className="flex flex-col px-4 lg:px-10">

      <div className="flex flex-row justify-end items-center gap-6 text-grayColor cursor-pointer ">
        <ChevronLeft className="hover:text-darkColor transition hover:scale-105 duration-300" onClick={slideLeftTwo}/>
        <ChevronRight className="hover:text-darkColor transition hover:scale-105 duration-300" onClick={slideRightTwo}/>
      </div>

      <div className="flex flex-col w-full justify-center items-center overflow-x-scroll scroll scroll-smooth scrollbar-hide my-8" id="sliderTwo">

        <div className="relative">
        <div className="flex ">
            
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>
            <FormationItem img="assets/img/technology.jpeg"/>

          </div>
        </div>
      </div>
    </div>


  )
}
