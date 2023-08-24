import React from "react";
import logo from "../assets/images/astronout.png";
import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/bg.jpg";
import Navbar from "./Navbar";
import "../styles.css";

function Header() {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
              <button className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl">
                Bem vindo ao meu Portfolio
              </button>
            </div>
            <h1 className="text-white text-5xl font-bold">
              Olá! Me chamo Luiz
            </h1>
            <p className="text-white py-4 max-w-lg text-lg">
              Um apaixonado desenvolvedor full-stack com um foco sólido em
              back-end e experiência em front-end. Aqui você encontrará uma
              coleção das minhas melhores obras e um vislumbre das minhas
              habilidades técnicas. Meu objetivo é criar soluções tecnológicas
              eficazes e elegantes que impulsionem o mundo digital. Explore o
              meu portfólio e descubra como minhas habilidades podem transformar
              sua visão em realidade.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5521971618786&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="  text-white text-2xl"
            >
              Vamos nos conectar{" "}
              <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}
            </a>
          </div>
          <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo1} alt="" />
          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
