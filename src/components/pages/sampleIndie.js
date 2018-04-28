 import React, { Component } from 'react';
// // import {
// // Switch
 // } from 'react-router-dom';
 import independent from '../../Assets/images/independent.jpg';
 import axios from 'axios';

 class SampleIndie extends Component {
 
     render() {
       return (
        <div className="wrap">
        <div className="container">
         <section className="row">
           <div className="col-md-8">
             <article className="about-me-content">
               <h1 className="about-me-header">About Me</h1>
               {/* <hr className="about-me-hr"> */}
               <img src="assets/imgs/natebeach.jpeg" alt="" id="nate-image"/>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <br />
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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

export default SampleIndie;
