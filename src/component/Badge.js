import React, { Component } from "react";
import "../styles/App.css";

const BadgeItem = function(props) {
  return props.spec.map((value, idx) => {
    return (
      <div className="badge" key={`${idx}__badge`}>
        {value}
      </div>
    );
  });
};
class Badge extends Component {
  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <h2>{this.props.title}</h2>
        <div style={{ flex: 1, flexDirection: "row" }}>
          <BadgeItem spec={this.props.skillset} />
        </div>
      </div>
    );
  }
}

export default Badge;
