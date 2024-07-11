import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sub-cont">
        <div className="about-header">
          <h1 className="header-1">
            An About Us Page, so you can <br />
            <br />
            know about us
          </h1>
        </div>
        <div className="content-cont">
          <div className="left-span">
            welcome to Tee-Store, your ultimate destination for al trendy Tee's
            <br />
            <br />
            <br />
            <button onClick={() => navigate("/products")}>
              Shop with us today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
