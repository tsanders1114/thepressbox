import React, { Component } from 'react';
import facebook2 from '../../Assets/images/facebook2.jpg';

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
              <h6>In the depths of a snowy forest in an unknown wartime, two soldiers from opposing armies try to outwit each other in a perilous game of Tic-Tac-Toe, until they find themselves outplayed by karma.</h6>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/He9FeJZua20" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> 
             
             </article>
           </div>
           <div className="col-md-4">

             {/* <!-- Start of Connect With Me Area --> */}
             <section id="connect-with-me-area">
               <div className="connect-with-me-content">
                 <h1 className="connect-with-me-header">Click To Connect With Me</h1>
                 {/* </hr> */}
                 <div id="images">
                 <a href="https://www.facebook.com/cortofix/?hc_ref=ARSXrImwa0wjnQGdzgx-l1AacJREXVd4TK8rIiE78-DkU7iW9IMBAePfZ0gjLr6Vyx8&fref=nf">
                   <img src={facebook2} alt="" className="connect-with-me-photo"/>
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

export default AcimvasicIndie;
