import React, { Component } from 'react';

import independent from '../../Assets/images/independent.jpg';
 import axios from 'axios';
import CSS from './sampleIndie.css';

 class AcimvasicIndie extends Component {
 
     render() {
       return (
        <div className="wrap">
        <div className="container">
         <section className="row">
           <div className="col-xs-8">
             <article className="aboutMeContent">
               <h1 className="about-me-header">Aćimvasić</h1>
              <h5>" 8 " - (a short film)</h5>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/He9FeJZua20" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> 
             </article>
           </div>
           <div className="col-md-4">

             {/* <!-- Start of Connect With Me Area --> */}
             <section id="connect-with-me-area">
               <div className="connect-with-me-content">
                 <h1 className="connect-with-me-header">Connect With Me</h1>
                 {/* </hr> */}
                 <div id="images">
                   <img src="assets/imgs/github.png" alt="" className="connect-with-me-photo"/>
                   <img src="assets/imgs/linkedin.png" alt="" className="connect-with-me-photo"/>
                   <img src="assets/imgs/stackover2.png" alt="" className="connect-with-me-photo"/>
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

export default AcimvasicIndie;
