import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, TwitterX, Youtube } from "react-bootstrap-icons";


export default function FooterNewsletter() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Soumission en cours de traitement ...');
  }

  return (
    <div className="flex flex-col md:flex-row justify-start md:justify-between items-start gap-4 px-4 md:px-16">

      <div className="flex flex-col justify-start items-start">
        <Link to={'/'}>
          <img src="assets/img/logo.png" className="w-20" alt="" />
        </Link>

        <div className="flex flex-col md:gap-y-4 gap-4">
          <p className="text-easyGrayColor text-[13px] md:text-sm font-semibold w-full md:w-[90%]">Abonnez-vous à notre newsletter pour des mises à jour régulières sur les offres, les coupons et plus encore</p>
          <form className="flex flex-row w-full gap-x-6" autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="" placeholder="Votre adresse email"
              className="border-2 border-grayColor bg-transparent placeholder:text-grayColor px-4 py-2 rounded-sm outline-none text-easyGrayColor w-[60%] md:w-[70%]"
            />
            <button type="submit" className="bg-redColor text-easyGrayColor px-6 md:px-12 hover:bg-red-700 md:w-[20%] transition">
              Souscrire
            </button>
          </form>
        </div>
      </div>


      <div className="flex flex-col justify-start items-start ">
        <span className="uppercase text-grayColor font-semibold">suivez-nous</span>
        <div className="flex flex-row gap-2 my-4">
          <Link to={'..'}>
            <div className="bg-easyGrayColor p-2 rounded-full text-darkColor hover:text-redColor transition">
              <Facebook />
            </div>
          </Link>

          <Link to={'..'}>
            <div className="bg-easyGrayColor p-2 rounded-full text-darkColor hover:text-redColor transition">
              <TwitterX />
            </div>
          </Link>

          <Link to={'..'}>
            <div className="bg-easyGrayColor p-2 rounded-full text-darkColor hover:text-redColor transition">
              <Instagram />
            </div>
          </Link>

          <Link to={'..'}>
            <div className="bg-easyGrayColor p-2 rounded-full text-darkColor hover:text-redColor transition">
              <Youtube />
            </div>
          </Link>

          <Link to={'..'}>
            <div className="bg-easyGrayColor p-2 rounded-full text-darkColor hover:text-redColor transition">
              <Linkedin />
            </div>
          </Link>
        </div>

        <span className="uppercase text-grayColor font-semibold mt-6">application mobile</span>

        <div className="flex flex-row gap-2 my-4">
          <Link to={'..'}>
            <img src="assets/img/play.png" className="w-28 hover:scale-105 duration-300" alt="" />
          </Link>

          <Link to={'..'}>
            <img src="assets/img/app.png" className="w-28 hover:scale-105 duration-300" alt="" />
          </Link>
        </div>
      </div>

    </div>
  )
}
