 import React, { Component } from 'react';
// // import {
// // Switch
 // } from 'react-router-dom';
import facebook from '../../Assets/images/facebook.jpg';
 
 import independent from '../../Assets/images/independent.jpg';
 import axios from 'axios';
 import CSS from './sampleIndie.css';

 class SampleIndie extends Component {
 
     render() {
       return (
        <div className="wrap">
        <div className="container">
         <section className="row">
           <div className="col-xs-8">
             <article className="aboutMeContent">
               <h1 className="about-me-header">Maximilian Raboin</h1>
               Again - Short Film - (2016)
               <h6>A man (Maximilian Raboin) mourning the death of his loved one (Ines Hoeysater Asserson), is psychologically tortured as he follows someone that reminds him of her.</h6>
               
               <iframe width="500" height="300" src="https://www.youtube.com/embed/Z1Ip5HQ5m8o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
               
             </article>
           </div>
           <div className="col-md-4">

             {/* <!-- Start of Connect With Me Area --> */}
             <section id="connect-with-me-area">
               <div className="connect-with-me-content">
                 <h2 className="connect-with-me-header">Click To Connect With Me</h2>
                 {/* </hr> */}
                 <div id="images">
                 <a href="https://www.facebook.com/maximilian.raboin">
                 
                   <img src={facebook} alt="" className="connect-with-me-photo"/>
                   </a>
                 </div>
               </div>
             </section>
             {/* <!-- End of the Connect With Me Area --> */}

           </div>
         </section>
       </div>
     </div>

       );
     }
   }

export default SampleIndie;
