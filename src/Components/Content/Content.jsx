import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import parse from 'html-react-parser';
import PostList from "../Posts/Posts"

import Team from "./img/team.jpg";
import Team2 from "./img/team2.jpg";
import Upsell from "./img/upsell.jpg";
import Nuvemshop from "./img/nuvemshop.png";
import Bling from "./img/bling.png";
import Hubsell from "./img/hubsell.png";
import Plugg from "./img/plugg.to_.png";
import Woocommerce from "./img/woocommerce.png";
import Shopify from "./img/shopify.png";
import Solares from "./img/solares.png";
import Magento from "./img/magento.png";
import Tray from "./img/tray.png";
import Nfservice from "./img/nfservice.png";

//import Flechas from "./img/flechas.png";
import Usuario3d from "../img/slide-01.jpg";

const Content = () => {

  /* const PageList = ({ startIndex }) => {
   const [pages, getPages] = useState([]);
 
   useEffect(() => {
 
     const url = "http://localhost/wordpress/wp-json/wp/v2/pages"
 
     axios.get(url)
       .then(function (response) {
         // handle success
         //console.log(response.data);
       getPages(response.data)
       })
       .catch(function (error) {
         // handle error
         console.log(error);
       })
       .finally(function () {
         // always executed
         
       });
 
 
   }, []);*/




  return (
    <>
      <section id="content" className="" style={{ paddingTop: "1rem" }}>
        <div className="container-fluid">
          <div className="container container-props">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h2
                  className="animate__animated animate__fadeInLeft animate__delay-2s mb-5"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bolder",
                    color: "#273240",
                    lineHeight: "38px",
                    marginTop: "1rem",
                  }}
                >

                  <div className="div1">
                    <PostList startIndex={1} />
                  </div>
                 

                </h2>
               
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{display:"flex", justifyContent:"flex-end"}}>
                <figure className="animate__animated animate__fadeIn animate__delay-1s">
                  <img
                    className="img-fluid rounded img-hero"
                    src={Team}
                    alt="Time de designers"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="content5" className="" style={{ paddingTop: "2rem" }}>
        <div className="container-fluid">
          <div className="container container-props">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <figure className="animate-fade-up animate-once animate-duration-[2800ms]">
                  <img
                    style={{}}
                    className="img-fluid rounded img-hero"
                    src={Usuario3d}
                    alt="Time de vendas"
                  />
                </figure>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h2
                    className="animate-fade-up animate-once animate-duration-[2800ms]"
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bolder",
                      color: "#273240",
                      lineHeight: "38px",
                      marginTop: "1rem",
                    }}
                  >
                  <div className="div2">
                    <PostList startIndex={0} />
                  </div>

                  </h2>
                  <br />
                </div>

               
                <div className="mbr-section-btn mt-5">
                  <button
                    style={{ marginRight: "10px" }}
                    className="btn-call-action"
                    href="#"
                  >
                    Comece agora
                  </button>
                  <button className="btn-call-action" href="#">
                    Agende com um consultor
                  </button>
                </div>
              </div>

              {/*<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <figure className="animate-fade-up animate-once animate-duration-[2800ms]">
                  <img
                    className="img-fluid rounded img-hero"
                    src={Upsell}
                    alt="Time de designers"
                  />
                </figure>
                </div>*/}
            </div>




            <div className="mt-5 mb-5">
              <h3 id="title-plataformas"
                className="text-center text-uppercase mb-5"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bolder",
                  color: "#273240",
                  lineHeight: "38px",
                  marginTop: "1rem",
                }}
              >
                Parceiros e produtos
              </h3>
              <div id="companys" className="grid grid-cols-5 gap-4">
                <div className="box-company">
                  <img className="" src={Solares} alt="" />
                </div>
                <div className="box-company">
                  <img src={Solares} alt="" />
                </div>
                <div className="box-company">
                  <img src={Solares} alt="" />
                </div>
                <div className="box-company">
                  <img src={Solares} alt="" />
                </div>
                <div className="box-company">
                  <img src={Solares} alt="" />
                </div>
                <div className="col-start-5 row-start-2 box-company ">
                  <img src={Solares} alt="" />
                </div>
                <div className="col-start-4 row-start-2 box-company">
                  <img src={Solares} alt="" />
                </div>
                <div className="col-start-3 row-start-2 box-company">
                  <img src={Solares} alt="" />
                </div>
                <div className="col-start-2 row-start-2 box-company">
                  <img src={Solares} alt="" />
                </div>
                <div className="col-start-1 row-start-2 box-company">
                  <img src={Solares} alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
