import React, { Component } from 'react';
import world from '../../Assets/images/world.jpg';

// import {
  // Switch
// } from 'react-router-dom';
// import CSS from "./about.css";


class About extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>The PressBox</h1>
        <p>We Help Independent Creators Get Discovered!</p>
        <p>The PressBox is made up of a video blog collection of videos from continents in the world that have Indepedenent Creative Works!<br/> The PressBox is meant for just Independent Creatives to have a platiform for users to discover content never before seen! Example categories would be Motivational, Film/Television, Spoken Word, Visual Artist & of course Independent Music from all genres!
The PressBox is a site for those professional independent creatives displaying a the best of the creative through there video message. Making it too The PressBox is a privilege for independent creatives to show their best work. The PressBox 
The PressBox is not a YouTube or a WorldStarhiphop  application. These two applications corrupt the world with showing both negative and positive things. Not all things on each of these sites are harmful but when you spend time on these sights what is the real message we are sending the youth and too ourselves! Here at The PressBox are we about the creative individual showing the talent they have learning from others and giving them a chance to be a Great Leader on their platform..

</p>

        <img src={world} class="img-circle person" alt="Random Name" width="300" height="300" /> 
        

        
</div>


        );
      }
    }
    
    export default About;
