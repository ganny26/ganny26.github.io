import React, { Component } from "react";
import BannerComponent from "./component/BannerComponent";
import SkillsComponent from "./component/SkillsComponent";
import Badge from "./component/Badge";
import { SkillsList, SkillsRating } from "./content";
class App extends Component {
  render() {
    return (
      <div>
        <BannerComponent />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1, margin: "20px" }}>
            {SkillsList.map((skills, idx) => (
              <Badge {...skills} key={`${idx}__skills`} />
            ))}
          </div>
          <div style={{ flex: 1 }}>
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
