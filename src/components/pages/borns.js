import React, { Component } from 'react';

import independent from '../../Assets/images/independent.jpg';
import facebook3 from '../../Assets/images/facebook3.jpg';

import northAmerica2 from '../../Assets/images/northAmerica2.png';

 import axios from 'axios';
import CSS from './sampleIndie.css';

 class BornsIndie extends Component {
 
     render() {
       return (
        <div className="wrap">
        <div className="container">
         <section className="row">
           <div className="col-xs-8">
             <article className="aboutMeContent">
               <h1 className="about-me-header">Borns</h1>
              <h5>American Money</h5>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/pLBmqwA4AGc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
             </article>
           </div>
           <div className="col-md-4">

             {/* <!-- Start of Connect With Me Area --> */}
             <section id="connect-with-me-area">
               <div className="connect-with-me-content">
                 <h1 className="connect-with-me-header">Click To Connect With Me</h1>
                 {/* </hr> */}
                 <div id="images">
                 <a href="https://www.facebook.com/bornsmusic/">
                   <img src={facebook3} alt="" className="connect-with-me-photo"/>
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

export default BornsIndie;
