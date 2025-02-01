import { useState } from "react";
import { ArrowLeft, CheckSquare, EyeFill, EyeSlashFill, Square } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function SellerLogin() {
  const [hidePassword, setHidePassword] = useState(true);
  const [remember, setRemember] = useState(false);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Connexion en cours de traitement...');
  }

  return (
    <>
      <div className="flex w-full h-full bg-whiteColor md:bg-transparent md:px-10 md:py-20">

        <div className="flex flex-col md:flex-row w-full justify-center items-center bg-whiteColor shadow-lg shadow-grayColor rounded-2xl">
          <div className="flex w-full md:w-3/6 h-full animate__animated animate__fadeIn duration-50">
            <img src="/assets/img/auth.jpg" className="rounded-l-2xl" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center md:w-3/6">

            <div className="flex flex-col w-full justify-center items-center">


              <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6 h-auto w-full md:w-full md:px-10 lg:px-28 animate__animated animate__fadeIn duration-50">

                <div className="flex flex-row w-full justify-start items-start">
                  <Link to={'/'}>
                    <img src="/assets/img/logo.png" className="w-16" alt="" />
                  </Link>
                </div>


                <div className="flex flex-col mb-6">
                  <span className="text-redColor uppercase font-bold text-2xl">Bon Retour.</span>
                  <span className="text-black text-sm">Connectez-vous à votre compte vendeur</span>
                </div>


                <div className="flex flex-col gap-y-2">
                  <label htmlFor="email" className="font-semibold">Email</label>
                  <input type="text" name="email" id="email" placeholder="johndoe@gmail.com" className="py-2 w-full md:w-full outline-none px-2 border-[1px] border-green-600 placeholder:font-semibold placeholder:text-sm rounded-sm" />
                </div>

                <div className="relative flex flex-col gap-y-2 ">
                  <label htmlFor="password" className="font-semibold">Mot de passe</label>

                  <input type={hidePassword ? 'password' : 'text'} name="password" placeholder="mot de passe" id="password" className="py-2 w-full border-[1px] border-green-600 placeholder:font-semibold placeholder:text-sm  outline-none px-2" />

                  <div className="absolute mt-12 right-0 mr-6 cursor-pointer" onClick={() => setHidePassword(!hidePassword)}>
                    {
                      hidePassword ? (
                        <EyeFill className="right-0" />

                      ) : (
                        <EyeSlashFill className="right-0" />

                      )
                    }
                  </div>

                  <div className="flex w-full justify-end">
                    <span className="text-[13px] text-grayColor">Le mot de passe doit contenir au moin 6 caractères.</span>
                  </div>
                </div>


                <div className="flex flex-row w-full md:w-full justify-between items-center">
                  <div className="flex flex-row text-grayColor gap-2 hover:text-redColor cursor-pointer" onClick={() => setRemember(!remember)}>
                    {/* <input type="checkbox" name="memory" id="memory" /> */}
                    {
                      remember ? (
                        <CheckSquare className="animate__animated animate__fadeIn duration-200" />
                      ) : (
                        <Square className="animate__animated animate__fadeIn duration-200" />
                      )
                    }
                    <span className="text-[13px]">Souviens-toi de moi</span>
                  </div>

                  <Link to={'..'} className="text-[13px] text-grayColor hover:text-redColor underline">
                    Mot de passe oublié ?
                  </Link>
                </div>


                <button type="submit" className="w-full md:w-full bg-redColor text-easyGrayColor py-2 font-semibold my-4 rounded-sm hover:bg-red-700 transition">
                  S'identifier
                </button>

                <div className="flex flex-col gap-y-4 justify-center items-center w-full md:w-full">
                  <div className="flex flex-row justify-center items-center gap-2 my-6">
                    <span className="text-[12px] text-grayColor font-semibold ">Vous n'avez pas de compte?</span>
                    <Link to={'/shops/create'} className="font-semibold text-redColor hover:underline">
                      Créez votre boutique
                    </Link>
                  </div>
                </div>

                <Link to={'..'} className="flex flex-row justify-start items-center mb-6 gap-2 font-semibold text-redColor hover:underline">
                  <ArrowLeft />
                  Retourner à l'accueil
                </Link>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
