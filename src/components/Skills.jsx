import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import bg from "../assets/images/banner-bg.png";
import CircularProgressBar from "./SkillProgressBar";
import { skillsUsage } from "../assets/Skills";

function Skills() {
  return (
    <>
      <div
        id="skills"
        style={{ backgroundImage: `url(${bg})` }}
        className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
      >
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Skills</h1>
          <p className="text-md py-3">
            Este é um resumo das minhas habilidades técnicas e experiência. Com
            uma base sólida em desenvolvimento web e uma paixão pela
            aprendizagem contínua, estou sempre procurando maneiras de me
            aprimorar e contribuir para projetos emocionantes. Desde o
            desenvolvimento front-end com React até o back-end com Node.js e a
            gestão de projetos com Git/GitHub, estou pronto para enfrentar
            desafios e entregar resultados de alta qualidade. No entanto, o meu
            verdadeiro destaque está no desenvolvimento back-end. Com uma
            especialização sólida em tecnologias como Node.js, TypeScript e
            Docker, sou capaz de projetar e implementar aplicações robustas que
            ajudam a impulsionar o seu trabalho. Conheça minhas habilidades
            abaixo:
          </p>
          <div className="box flex  justify-between  items-center bg-[#171717] my-6">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              {skillsUsage.map((skill) => (
                <SwiperSlide className="bg-[#171717]">
                  {" "}
                  <div className=" bg-[#171717]">
                    <CircularProgressBar percentage={skill.percentage} />
                    <h1 className="font-bold text-2xl my-2">{skill.name}</h1>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
