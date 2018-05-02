import React, { Component } from 'react';
import{
    Link
}from 'react-router-dom';

import indiefilm2 from '../../Assets/images/indiefilm2.jpg';

class Header extends Component {
  render() {
    return (
      <header className="header-color">
          <div className="logo">
          <img src={indiefilm2} alt="logo"/>
          {/* <img src={facebook} alt="" className="connect-with-me-photo"/> */}
          
          </div>

          <nav className="nav">
              <ul className="links">
                  <li className="first">
                  
                  <Link to="/">Home</Link>
                  
                  </li>
                  <li>
                  
                  <Link to="/Featured">Featured</Link>
                  
                  </li>

                  <li>

                  <Link to="/About">About</Link>
                      
                  </li>
                  <li>
                  
                  <Link to="/Signup">Signup</Link>
                  
                  </li>


                  <li className="last">
                  
                  <Link to="/Contact">Contact</Link>
                      
                  </li>
              </ul>
          </nav>

      </header>
    
    );
  }
}

export default Header;
