import React, { Component } from 'react';
// import africa from '../../Assets/images/africa.jpg';
import europe from '../../Assets/images/europe.jpg';
import northAmerica2 from '../../Assets/images/northAmerica2.png';
import southAmerica from '../../Assets/images/southAmerica.jpg';
import CSS from './featuredIndpendence.css';

// import {
  // Switch
// } from 'react-router-dom';
// import Footer from '../footerComponent/footer';
// import CSS from "./featuredIndpendence.css";

class Featured extends Component {
  render() {
    return (

      <div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">
        <div id="band" class="container text-center">
          <h1>Independent Creators From Around The World</h1>
          <h2>We love Independent Creators!</h2>
          <h2><strong><br /> Click North America Below<br />To Begin Your Discovery!</strong></h2>
          <div className="row">
            <div className="col-sm-12">
              <p className="text-center"><strong>North America</strong></p><br />
              <a href="/NorthContent" data-toggle="collapse">
                <button><img src={northAmerica2} class="img-circle person" alt="Random Name" width="355" height="255" /> </button>
              </a>
              <div id="demo" class="collapse">


              </div>
            </div>

            
          {/* <!-- Container (TOUR Section) --> */}
          <div id="tour" className="bg-1">
            <div className="container">
              <iframe className="intro-video" width="600" height="500" src="https://www.youtube.com/embed/sVDXQJlqqmk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      </div>

    );
  }
}

export default Featured;
