import React from "react";
import img from "../assets/images/contact-img.svg";

const formsPree = process.env.REACT_APP_LINK_FORMSPREE;

function Contact() {
  return (
    <>
      <div className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
        <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
          <div className="imgbox lg:hidden">
            <img className="w-[550px] h-full" src={img} alt="" />
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold text-4xl">Entrar em Contato</h1>
            <form action={formsPree} method="POST" className="flex flex-col ">
              <div className="flex gap-4 py-2  ">
                <input
                  className="bg-transparent h-14 rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white lg:w-36 "
                  type="text"
                  name="Nome"
                  placeholder="Nome"
                />
                <input
                  className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                  type="text"
                  name="Sobrenome"
                  placeholder="Sobrenome"
                />
              </div>
              <div className="flex gap-4  py-4  ">
                <input
                  className="bg-transparent h-14  rounded-2xl   border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                  type="email"
                  name="Email"
                  placeholder="Email"
                />
                <input
                  className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                  type="phone"
                  name="Telefone"
                  placeholder="Telefone"
                />
              </div>
              <textarea
                className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
                rows={40}
                cols={35}
                placeholder="Mensagem"
              ></textarea>
              <button
                type="submit"
                className="bg-white border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold "
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
