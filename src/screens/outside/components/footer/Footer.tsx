import FooterLinks from "./components/footer-links/FooterLinks";
import FooterNewsletter from "./components/footer-newsletter/FooterNewsletter";

export default function Footer() {



  return (
    <>
      <section className="flex flex-col bottom-0 w-full bg-darkColor md:py-6">

        <FooterNewsletter />

        <div className="hidden md:block w-full h-[1px] bg-grayColor my-8" />

        <FooterLinks />

      </section>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0 h-16 md:px-16 w-full bottom-0 bg-darkEndFooterColor">
        <span className="text-grayColor font-semibold">
          © 2023 Estuaire Achats By TECHFLECTION 
        </span>

        <img src="assets/img/img_footer.webp" className="w-32" alt="" />
      </div>
    </>
  )
}
