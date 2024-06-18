import React from "react";
/*import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";*/
import PostList from "../Posts/Posts";
import Customers from "../Customers/Customers";
import Team from "./img/team.jpg";
import Usuario3d from "../img/slide-01.jpg";
import Products from "../Products/Products";

const Content = () => {
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
              <div
                className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
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
            </div>
          </div>
        </div>
      </section>
      <section id="content6" className="" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <Products />
        </div>
      </section>

      <section id="content6" className="" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <Customers />
        </div>
      </section>
    </>
  );
};

export default Content;
