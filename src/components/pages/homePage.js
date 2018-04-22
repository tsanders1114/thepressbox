import React, { Component } from 'react';
import independent from '../../Assets/images/independent.jpg';
// import { Grid, Cell } from 'react-mdl';
// import {
  // Switch
// } from 'react-router-dom';
// import Footer from '../footerComponent/footer';
import CSS from "./homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <div className="masthead clearfix">
              <div className="inner">
                <h3 className="masthead-brand">The PressBox</h3>


              </div>
            </div>

            <div className="inner cover">




              <p className="lead"><a className="btn btn-lg btn-info" href="#">Explore Independence</a></p>
            </div>

            <div className="mastfoot">
              <div className="inner">
                {/* <!-- Validation --> */}
                <p>© 2018 Timothy Sanders~ </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Homepage;
