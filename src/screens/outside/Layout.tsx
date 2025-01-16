import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import TopBar from "./components/topbar/TopBar";
import LeftAnimation from "./components/left-animation/LeftAnimation";

export default function Layout() {
  return (
    <>
      <TopBar />
      <Navbar />
      <LeftAnimation />
      <Outlet />
      <Footer />
    </>
  )
}
