import { useState } from "react";
import { ArrowLeft, EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function ShopCreate() {
  const [hidePassword, setHidePassword] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Inscription en cours de traitement...');
  }

  return (
    <>
      <div className="flex w-full h-full bg-whiteColor md:bg-transparent md:px-10 md:py-4 text-sm ">

        <div className="flex flex-col md:flex-row w-full justify-center items-center bg-transparent md:bg-whiteColor md:shadow-lg shadow-grayColor rounded-2xl">
          <div className="flex w-full md:w-3/6 h-full animate__animated animate__fadeIn duration-50">
            <img src="/assets/img/auth.jpg" className="rounded-l-2xl" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center md:w-3/6">

            <div className="flex flex-col w-full justify-center items-center">

              <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col h-full w-full md:w-full px-6 md:px-10 lg:px-28 animate__animated animate__fadeIn duration-50">

                <div className="flex flex-row w-full justify-start items-start">
                  <Link to={'/'}>
                    <img src="/assets/img/logo.png" className="w-16" alt="" />
                  </Link>
                </div>

                <div className="flex mb-6">
                  <span className="text-redColor uppercase font-bold text-xl md:text-2xl text-center">enregistrez votre boutique.</span>
                </div>


                <div className="flex flex-col gap-y-4">
                  <h2 className="underline">Informations personnelles</h2>
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="name" className="font-semibold  text-sm">Votre nom</label>
                    <input type="text" name="name" id="name" placeholder="Nom et prénom" className="py-2 w-full md:w-full outline-none px-2 border-[1px] border-green-600 placeholder:font-semibold placeholder:text-sm rounded-sm" />
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="email" className="font-semibold  text-sm">Email</label>
                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" className="py-2 w-full md:w-full outline-none px-2 border-[1px] border-green-600 placeholder:font-semibold placeholder:text-sm rounded-sm" />
                  </div>

                  <div className="relative flex flex-col gap-y-2 ">
                    <label htmlFor="password" className="font-semibold">Mot de passe</label>

                    <input type={hidePassword ? 'password' : 'text'} name="password" placeholder="mot de passe" id="password" className="py-2 w-full border-[1px] border-green-600 placeholder:font-semibold placeholder:text-sm  outline-none px-2" />

                    <div className="absolute mt-10 right-0 mr-6 cursor-pointer" onClick={() => setHidePassword(!hidePassword)}>
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




                  <div className="relative flex flex-col gap-y-2 ">
                    <label htmlFor="confirm_password" className="font-semibold">Confirmez le mot de passe</label>

                    <input type={hidePassword ? 'password' : 'text'} name="confirm_password" placeholder="Confirmez le mot de passe" id="confirm_password" className="py-2 w-full border-[1px] border-green-600 placeholder:font-semibold placeholder:text-sm  outline-none px-2" />

                    <div className="absolute mt-10 right-0 mr-6 cursor-pointer" onClick={() => setHidePassword(!hidePassword)}>
                      {
                        hidePassword ? (
                          <EyeFill className="right-0" />

                        ) : (
                          <EyeSlashFill className="right-0" />

                        )
                      }
                    </div>

                  </div>

                  <h2 className="underline">Informations de base</h2>


                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="social_reason" className="font-semibold text-sm">Nom de la boutique</label>
                    <input type="text" name="social_reason" id="social_reason" placeholder="Nom de la boutique" className="py-2 w-full md:w-full outline-none px-2 border-[1px] border-green-600 placeholder:font-semibold placeholder:text-sm rounded-sm" />
                  </div>


                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="adresse" className="font-semibold text-sm">Adresse</label>
                    <input type="text" name="adresse" id="adresse" placeholder="Nom de la boutique" className="py-2 w-full md:w-full outline-none px-2 border-[1px] border-green-600 placeholder:font-semibold placeholder:text-sm rounded-sm" />
                  </div>
                </div>


                <button type="submit" className="w-full md:w-full bg-redColor text-easyGrayColor py-2 font-semibold my-4 rounded-sm hover:bg-red-700 transition">
                  Enregistrez votre boutique
                </button>


                <div className="flex flex-col gap-y-4 justify-center items-center w-full md:w-full">
                  <div className="flex flex-row justify-center items-center gap-2 my-6">
                    <span className="text-[12px] text-grayColor font-semibold ">Vous avez déjà un compte? </span>
                    <Link to={'/seller/login'} className="font-semibold text-redColor hover:underline">
                      S'identifier
                    </Link>
                  </div>
                </div>

                <Link to={'..'} className="flex flex-row justify-start items-center my-6 gap-2 font-semibold text-redColor hover:underline">
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
