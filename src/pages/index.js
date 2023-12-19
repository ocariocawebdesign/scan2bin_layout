import * as React from "react";
import "./index.css";
import "../styles/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Header from "../Components/Header/Header";
import HeroContent from "../Components/HeroContent/HeroContent";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";

const IndexPage = () => {
  return (
    <>
      <Header />
      <HeroContent />
      <Content />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Scan2bin</title>;
