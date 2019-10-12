import React, { Component } from "react";
import "../styles/App.css";

class SkillsComponent extends Component {
  render() {
    let { name, level } = this.props;
    return (
      <div className="skill-view">
        <div className="skill-description">
          <div>{name}</div>
          <div>{level} %</div>
        </div>
        <div className="skills-content">
          <div className="progress">
            <div className="progress-bar" style={{ width: `${level}%` }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsComponent;
