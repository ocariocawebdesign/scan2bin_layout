import React from "react";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import Logo from "../img/logo-footer.png";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          padding: "1rem",
          backgroundColor: "#101820",
          color: "#FAFAFA",
        }}
      >
        <div className="container" >
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <img src={Logo} width="120" alt="Logo " />
            </div>
            <div  className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <p className="text-center" style={{ marginTop:"25px" }}>
                Copyright © 2023 - Desenvolvido por Carlos Abreu
              </p>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div
                className=""
                style={{ display: "flex", justifyContent: "end" }}
              >
                <ScrollToTopButton />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
