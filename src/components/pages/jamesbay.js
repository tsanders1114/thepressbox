import React, { Component } from 'react';
import facebook4 from '../../Assets/images/facebook4.jpg';

import independent from '../../Assets/images/independent.jpg';
 import axios from 'axios';
import CSS from './sampleIndie.css';

 class JamesBayIndie extends Component {
 
     render() {
       return (
        <div className="wrap">
        <div className="container">
         <section className="row">
           <div className="col-xs-8">
             <article className="aboutMeContent">
               <h1 className="about-me-header">James Bay</h1>
              <h5>Hold Back The River</h5>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/mqiH0ZSkM9I?start=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
             </article>
           </div>
           <div className="col-md-4">

             {/* <!-- Start of Connect With Me Area --> */}
             <section id="connect-with-me-area">
               <div className="connect-with-me-content">
                 <h2 className="connect-with-me-header">Click To Connect With Me</h2>
                 {/* </hr> */}
                 <div id="images">
                 <a href="https://www.facebook.com/jamesbaymusic/">

                 <img src={facebook4} href="https://www.facebook.com/jamesbaymusic/" className="connect-with-me-photo"/>
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

export default JamesBayIndie;
