import React, { Component } from 'react';
import independent from '../../Assets/images/independent.jpg';
// import { Grid, Cell } from 'react-mdl';
import {
  Link
} from 'react-router-dom';
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
                <h1 className="masthead-brand">The PressBox</h1>


              </div>
            </div>

            <div className="inner cover">




             <span className="btn btn-lg btn-info"><Link to="/Featured">Explore Independence</Link></span>
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
