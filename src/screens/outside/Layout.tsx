import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import TopBar from "./components/topbar/TopBar";
import LeftAnimation from "./components/left-animation/LeftAnimation";
import BottomNavigationBar from "./components/bottom-navigation-bar/BottomNavigationBar";
import Termes from "./home/components/termes/Termes";

export default function Layout() {
  return (
    <>
      <TopBar />
      <Navbar />
      <LeftAnimation />
      <Outlet />
      <BottomNavigationBar />
      <Termes />
      <Footer />
    </>
  )
}
