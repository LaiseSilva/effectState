import React, { useEffect, useState } from "react";
import InputLoign from "./inputLogin";
import InputBtn from "./InputBtn";
import { MdLock } from "react-icons/md";
import { AiFillFacebook, AiFillGoogleCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";


const LoginSpace = () => {

  const [login, setLogin] = useState({
    "mail" : "",
    "password" : ""
  })

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [event.target.name] : event.target.value
    })
  }

  useEffect(() => {
    console.log(login)
  }, [login])

  return (

    <>

      <main className="SpaceLogin">

        <div className="ImageSpaceLogin" >
          <img src="../assets/img/rocketart.png" alt="" />
        </div>

        <div className="LoginSpace">
          <div className="newHere">

            <span>Nova aqui? </span>
            <span> Cadastre-se </span>

          </div>

          <div className="TittleWelcomeBack">
            <h1> Bem vindo de volta! </h1>
            <p> Faça login para continuar </p>
          </div>

          <div className="inputLogin">
            <MdLock />
            <InputLoign name="mail" value={login.mail} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)} />
            <InputLoign name="password" value={login.password} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event) } />
          </div>

          <div className="btnLogin">
            <span> Esqueceu a senha?</span>

            <div className="btn_AutomaticLogin">
              <InputBtn />
              <span>login com <AiFillFacebook onClick={() => { console.log('Facebook') }} /> <AiFillGoogleCircle /> <AiFillLinkedin /> <AiFillInstagram /> </span>
            </div>

          </div>

        </div>



      </main>

    </>

  );

}

export default LoginSpace;