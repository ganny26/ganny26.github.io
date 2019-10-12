import React, { Component } from "react";
import "../styles/App.css";

class SocialIcon extends Component {
  constructor() {
    super();
    this.state = {
      iconName: "",
      linkurl: ""
    };
  }
  componentWillMount() {
    this.setState({
      iconName: this.props.iconname,
      linkurl: this.props.url
    });
  }
  render() {
    return (
      <div className="circle-btn">
        <a className="link-c" href={this.state.linkurl}>
          <span className={this.state.iconName}></span>
        </a>
      </div>
    );
  }
}

export default SocialIcon;
