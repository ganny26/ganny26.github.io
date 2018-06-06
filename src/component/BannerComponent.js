import React, { Component } from 'react';
import '../styles/App.css';
import SocialIcon from '../component/SocialIcon';
class BannerComponent extends Component {
    render() {
        return (
            <div className="banner">
                <h1>Selvaganesh Rajam</h1>
                <h5 className="banner__description">JavaScript lover, React JS & Android Developer ,
         Open Source enthusiast</h5>
                <div className="banner__contact">
                    <a href="mailto:selvaganeshrajam@gmail.com">
                        <button className="c_button">Contact</button>
                    </a>
                    <div className="contact">
                        <SocialIcon iconname="fab fa-github" url="https://github.com/ganny26/" />
                        <SocialIcon iconname="fab fa-medium-m" url="https://medium.com/@selvaganesh93/" />
                        <SocialIcon iconname="fab fa-twitter" url="https://twitter.com/seganesa" />
                        <SocialIcon iconname="fab fa-linkedin-in" url="https://in.linkedin.com/in/selvaganesh-rajam" />
                        <SocialIcon iconname="fab fa-instagram" url="https://www.instagram.com/selvaganesh93/" />
                        <SocialIcon iconname="fab fa-youtube" url="https://www.youtube.com/user/ganeshrsg/" />
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerComponent;
