import React, { Component } from "react";
import BannerComponent from "./component/BannerComponent";
import SkillsComponent from "./component/SkillsComponent";
import Badge from "./component/Badge";
import { SkillsList, SkillsRating } from "./content";
import "./styles/App.css";
class App extends Component {
  render() {
    return (
      <div>
        <BannerComponent />
        <div className="skills-row">
          <div className="skills-col">
            {SkillsList.map((skills, idx) => (
              <Badge {...skills} key={`${idx}__skills`} />
            ))}
          </div>
          <div className="skills-col">
            {SkillsRating.map((rating, idx) => (
              <SkillsComponent key={`${idx}__rating`} {...rating} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
