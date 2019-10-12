import React, { Component } from "react";
import "../styles/App.css";
import SocialIcon from "../component/SocialIcon";
import { SocialIconContent } from "../content";
class BannerComponent extends Component {
  render() {
    return (
      <div className="banner">
        <h1>Selvaganesh Rajam</h1>
        <h5 className="banner__description">
          JavaScript lover, React JS & Android Developer , Open Source
          enthusiast
        </h5>
        <div className="banner__contact">
          <a href="mailto:selvaganeshrajam@gmail.com">
            <button className="c_button">Contact</button>
          </a>
          <div className="contact">
            {SocialIconContent.map((social, idx) => (
              <SocialIcon key={`${idx}__social`} {...social} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BannerComponent;
