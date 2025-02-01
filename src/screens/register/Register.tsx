import { useState } from "react";
import { Apple, ArrowLeft, CheckSquare, EyeFill, EyeSlashFill, Facebook, Google, Square, TwitterX } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Register() {
  const [hidePassword, setHidePassword] = useState(true);
  const [agree, setAgree] = useState(false);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Inscription en cours de traitement...');
  }

  return (
    <>
      <div className="flex w-full h-full md:px-10 md:py-6">


        <div className="flex flex-col md:flex-row w-full justify-center items-center bg-whiteColor shadow-lg shadow-grayColor rounded-2xl">


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
                  <span className="text-redColor uppercase font-bold text-2xl">créer un compte.</span>
                </div>


                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="name" className="font-semibold"> Nom et prénom</label>
                    <input type="text" name="name" id="name" placeholder="Nom et prénom" className="py-2 w-full md:w-full outline-none px-2 border-[1px] border-green-600 placeholder:font-semibold placeholder:text-sm rounded-sm" />
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="email" className="font-semibold">Email</label>
                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" className="py-2 w-full md:w-full outline-none px-2 border-[1px] border-green-600 placeholder:font-semibold placeholder:text-sm rounded-sm" />
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

                  <div className="relative flex flex-col gap-y-2 ">
                    <label htmlFor="confirm_password" className="font-semibold">Confirmez le mot de passe</label>

                    <input type={hidePassword ? 'password' : 'text'} name="confirm_password" placeholder="Confirmez le mot de passe" id="confirm_password" className="py-2 w-full border-[1px] border-green-600 placeholder:font-semibold placeholder:text-sm  outline-none px-2" />

                    <div className="absolute mt-12 right-0 mr-6 cursor-pointer" onClick={() => setHidePassword(!hidePassword)}>
                      {
                        hidePassword ? (
                          <EyeFill className="right-0" />

                        ) : (
                          <EyeSlashFill className="right-0" />

                        )
                      }
                    </div>

                  </div>


                  <div className="flex flex-row w-full md:w-full justify-between items-center">
                    <div className="flex flex-row text-grayColor gap-2 ">
                      {/* <input type="checkbox" name="memory" id="memory" /> */}
                      {
                        agree ? (
                          <CheckSquare className="animate__animated animate__fadeIn duration-200 text-redColor cursor-pointer" onClick={() => setAgree(!agree)} />
                        ) : (
                          <Square className="animate__animated animate__fadeIn duration-200 cursor-pointer" onClick={() => setAgree(!agree)} />
                        )
                      }
                      <span className="text-[13px]">
                        En vous inscrivant, vous acceptez notre &nbsp;
                        <Link to={'..'} className="text-redColor font-semibold">
                          Termes et conditions
                        </Link>
                      </span>
                    </div>

                  </div>
                </div>


                <button type="submit" className="w-full md:w-full bg-redColor text-easyGrayColor py-2 font-semibold my-4 rounded-sm hover:bg-red-700 transition">
                  Créer un compte
                </button>


                <div className="flex flex-col gap-y-4 justify-center items-center w-full md:w-full">
                  <span className="text-[12px] text-grayColor font-semibold ">Ou rejoindre avec</span>
                  <div className="flex flex-row justify-center items-center gap-4">
                    <Link to={'..'} className="bg-redColor p-3 rounded-full hover:-translate-y-1 duration-700">
                      <Google className="text-white" />
                    </Link>

                    <Link to={'..'} className="bg-blue-900 p-3 rounded-full hover:-translate-y-1 duration-700">
                      <Facebook className="text-white" />
                    </Link>

                    <Link to={'..'} className="bg-black p-3 rounded-full hover:-translate-y-1 duration-700">
                      <TwitterX className="text-white" />
                    </Link>

                    <Link to={'..'} className="bg-easyGrayColor p-3 rounded-full hover:-translate-y-1 duration-700">
                      <Apple className="text-black" />
                    </Link>
                  </div>

                  <div className="flex flex-row justify-center items-center gap-2 my-6">
                    <span className="text-[12px] text-grayColor font-semibold ">Vous avez déjà un compte? </span>
                    <Link to={'/user/login'} className="font-semibold text-redColor hover:underline">
                      S'identifier
                    </Link>
                  </div>
                </div>

                <Link to={'..'} className="flex flex-row justify-start mb-6 items-center gap-2 font-semibold text-redColor hover:underline">
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
