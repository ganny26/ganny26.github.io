import React, { Component } from 'react';
import BannerComponent from './component/BannerComponent';
import SkillsComponent from './component/SkillsComponent';
import Badge from './component/Badge';
class App extends Component {
  render() {
    return (
      <div >
       <BannerComponent/>
       <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{flex:1,margin:'20px'}}>
            <Badge title="Programming Languages" skillset={["Java","JavaScript","Python"]}/>
            <Badge title="Web Technologies" skillset={["React JS","CSS3","HTML5"]}/>
            <Badge title="Mobile Technologies" skillset={["React Native","Android"]}/>
            <Badge title="API Management" skillset={["Swagger"]}/>
            <Badge title="Database" skillset={["Mongo DB"]}/>
            <Badge title="Libraries/Frameworks" skillset={["Express JS","Redux"]}/>
            <Badge title="CI Tools" skillset={["Jenkins","Travis CI"]}/>
            <Badge title="Unit Testing" skillset={["Mocha","Chai JS"]}/>
            <Badge title="Container Service" skillset={["Docker"]}/>
            <Badge title="Messaging" skillset={["Firebase"]}/>
            <Badge title="Search" skillset={["Elastic Search"]}/>
            <Badge title="Cloud Platform" skillset={["AWS","Digital Ocean"]}/>
          </div>
          <div style={{flex:1}}>
            <SkillsComponent name="HTML" level="95"/>
            <SkillsComponent name="CSS" level="92"/>
            <SkillsComponent name="Javascript" level="95"/>
            <SkillsComponent name="React JS" level="85"/>
            <SkillsComponent name="React Native" level="80"/>
            <SkillsComponent name="Docker" level="75"/>
            <SkillsComponent name="Jenkins" level="70"/>
            <SkillsComponent name="Java" level="88"/>
            <SkillsComponent name="Android" level="60"/>
            <SkillsComponent name="Design" level="75"/>
            <SkillsComponent name="UX" level="65"/>
          </div>
         </div>
      
      </div>
    );
  }
}

export default App;
