import React from "react";
import "./styles.css";
import menClothe from "../assets/img/men-clothe.png";
import womenClothe from "../assets/img/women-clothe.png";
import Hero from "../components/hero";
import CategoryCard from "../components/categoryCard";
const Home = ({ categoryRef }) => {
  return (
    <div>
      <Hero />
      <hr />
      <h2>Categories</h2>
      <div className="cat-cont" ref={categoryRef}>
        <CategoryCard imgSrc={menClothe} title={"Men's"} />
        <CategoryCard imgSrc={womenClothe} title={"Women's"} />
      </div>
    </div>
  );
};

export default Home;
