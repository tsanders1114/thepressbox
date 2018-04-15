import React, { Component } from 'react';
import{
    Link
}from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header-color">
          <div className="logo">
          Logo
          </div>

          <nav>
              <ul>
                  <li classname="first">
                  
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
