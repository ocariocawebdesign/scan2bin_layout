import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

import Digital from "../HeroContent/img/oculos-vr.jpg";
import OpenSpace from "../img/openspace.png";
import MatterPort from "../img/matterport.png";
import Pars from "../img/pars.png";

export default function Slide() {
  return (
    <>
     
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="container container-props">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-5">
                <div className="text-wrapper align-left">
                  <h1
                    id="title-hero"
                    className="mbr-section-title mb-5 mt-5 display-2 text-uppercase animate__animated animate__fadeIn"
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      color: "#fff",
                      lineHeight: "45px",
                      textAlign: "left",
                    }}
                  >
                    SOMOS A CONVERGÊNCIA ENTRE TECNOLOGIA E ENGENHARIA. SOMOS
                    UMA CONSTRUTORA DIGITAL.
                  </h1>
                  <h2
                    className="mbr-text mbr-fonts-style mb-4 display-7 animate__animated animate__fadeIn animate__delay-1s"
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "400",
                      color: "#FAFAFA",
                      lineHeight: "28px",
                      textAlign: "left",
                    }}
                  >
                    Oferecemos uma gama completa de soluções e serviços,
                    auxiliando nossos clientes a construir um mundo digital
                  </h2>
                  <div className="mbr-section-btn mt-5">
                    <div className="mt-5 mb-4"></div>
                    <button className="btn-call-action btn-large float-left" href="#">
                      <span className="text-lg font-bold">
                        Saiba mais sobre nossos serviços
                      </span>
                    </button>
                  </div>
                  {/*<div className="mt-5">
                    <h3
                      id="title-plataformas"
                      className="text-left text-uppercase"
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "bolder",
                        color: "#fff",
                        lineHeight: "38px",
                        marginTop: "1rem",
                      }}
                    >
                      Alguns parceiros
                    </h3>
                    <div id="companys" className="grid grid-cols-5 gap-20">
                      <div className="box-company ">
                        <img className="" src={MatterPort} alt="" />
                      </div>
                      <div className="box-company ml-3">
                        <img src={OpenSpace} alt="" />
                      </div>
                      <div className="box-company ml-5">
                        <img src={Pars} alt="" />
                      </div>
                    </div>
                    </div>*/}
                </div>
              </div>
              <div
                style={{ display: "flex", justifyContent: "center" }}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
              >
                <div className=" image-wrapper animate__animated animate__fadeIn animate__delay-0.10s drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                  <img
                    style={{ borderRadius: "2%", opacity: "0.8", marginTop: "1.2rem" }}
                    width="420"
                    className="img-fluid "
                    src={Digital}
                    alt="Usuário"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container container-props">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-5">
                <div className="text-wrapper align-left">
                  <h1
                    id="title-hero"
                    className="mbr-section-title mb-5 mt-5 display-2 text-uppercase animate__animated animate__fadeIn"
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      color: "#fff",
                      lineHeight: "45px",
                      textAlign: "left",
                    }}
                  >
                    SOMOS A CONVERGÊNCIA ENTRE TECNOLOGIA E ENGENHARIA. SOMOS
                    UMA CONSTRUTORA DIGITAL.
                  </h1>
                  <h2
                    className="mbr-text mbr-fonts-style mb-4 display-7 animate__animated animate__fadeIn animate__delay-1s"
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "400",
                      color: "#FAFAFA",
                      lineHeight: "28px",
                      textAlign: "left",
                    }}
                  >
                    Oferecemos uma gama completa de soluções e serviços,
                    auxiliando nossos clientes a construir um mundo digital
                  </h2>
                  <div className="mbr-section-btn mt-5">
                    <div className="mt-5 mb-4"></div>
                    <button className="btn-call-action btn-large float-left" href="#">
                      <span className="text-lg font-bold">
                        Saiba mais sobre nossos serviços
                      </span>
                    </button>
                  </div>
                  {/*<div className="mt-5">
                    <h3
                      id="title-plataformas"
                      className="text-left text-uppercase"
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "bolder",
                        color: "#fff",
                        lineHeight: "38px",
                        marginTop: "1rem",
                      }}
                    >
                      Alguns parceiros
                    </h3>
                    <div id="companys" className="grid grid-cols-5 gap-20">
                      <div className="box-company ">
                        <img className="" src={MatterPort} alt="" />
                      </div>
                      <div className="box-company ml-3">
                        <img src={OpenSpace} alt="" />
                      </div>
                      <div className="box-company ml-5">
                        <img src={Pars} alt="" />
                      </div>
                    </div>
                    </div>*/}
                </div>
              </div>
              <div
                style={{ display: "flex", justifyContent: "center" }}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
              >
                <div className=" image-wrapper animate__animated animate__fadeIn animate__delay-0.10s drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                  <img
                    style={{ borderRadius: "2%", opacity: "0.8", marginTop: "1.2rem" }}
                    width="420"
                    className="img-fluid "
                    src={Digital}
                    alt="Usuário"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container container-props">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-5">
                <div className="text-wrapper align-left">
                  <h1
                    id="title-hero"
                    className="mbr-section-title mb-5 mt-5 display-2 text-uppercase animate__animated animate__fadeIn"
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      color: "#fff",
                      lineHeight: "45px",
                      textAlign: "left",
                    }}
                  >
                    SOMOS A CONVERGÊNCIA ENTRE TECNOLOGIA E ENGENHARIA. SOMOS
                    UMA CONSTRUTORA DIGITAL.
                  </h1>
                  <h2
                    className="mbr-text mbr-fonts-style mb-4 display-7 animate__animated animate__fadeIn animate__delay-1s"
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "400",
                      color: "#FAFAFA",
                      lineHeight: "28px",
                      textAlign: "left",
                    }}
                  >
                    Oferecemos uma gama completa de soluções e serviços,
                    auxiliando nossos clientes a construir um mundo digital
                  </h2>
                  <div className="mbr-section-btn mt-5">
                    <div className="mt-5 mb-4"></div>
                    <button className="btn-call-action btn-large float-left" href="#">
                      <span className="text-lg font-bold">
                        Saiba mais sobre nossos serviços
                      </span>
                    </button>
                  </div>
                  {/*<div className="mt-5">
                    <h3
                      id="title-plataformas"
                      className="text-left text-uppercase"
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "bolder",
                        color: "#fff",
                        lineHeight: "38px",
                        marginTop: "1rem",
                      }}
                    >
                      Alguns parceiros
                    </h3>
                    <div id="companys" className="grid grid-cols-5 gap-20">
                      <div className="box-company ">
                        <img className="" src={MatterPort} alt="" />
                      </div>
                      <div className="box-company ml-3">
                        <img src={OpenSpace} alt="" />
                      </div>
                      <div className="box-company ml-5">
                        <img src={Pars} alt="" />
                      </div>
                    </div>
                    </div>*/}
                </div>
              </div>
              <div
                style={{ display: "flex", justifyContent: "center" }}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
              >
                <div className=" image-wrapper animate__animated animate__fadeIn animate__delay-0.10s drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                  <img
                    style={{ borderRadius: "2%", opacity: "0.8", marginTop: "1.2rem" }}
                    width="420"
                    className="img-fluid "
                    src={Digital}
                    alt="Usuário"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
