import React,  {Component} from 'react';
import independent from '../../Assets/images/independent.jpg';
import {Grid, Cell} from 'react-mdl';
import {
  Switch
}from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
     <div style={{width: '100', margin: 'auto'}}>
     <Grid className="homepage-grid">
      <Cell col={12}>
        <img
          src={independent}
          alt="indiecall"
          className="indiecall-img"
          />
          <div className="banner-text">
          <h1>Explore</h1>

          <hr/>

          <p>Independent Creators Works From Around The Globe</p>
          <p>Music Works|Film Works|Motivational Works|Visual Works</p>

          <div className="explore-links">
          {/*Music Link To Explore Page*/}
          <a href="http://google.com" rel="noopener noreferrer"target="_blank">
            <i className="fas fa-music" aria-hidden="true"/>
          </a>
          {/*Film Link To Explore Page*/}
          <a href="http://google.com" rel="noopener noreferrer"target="_blank">
            <i className="fas fa-film" aria-hidden="true"/>
          </a>
          {/*Motivation Link To Explore Page*/}
          <a href="http://google.com"rel="noopener noreferrer" target="_blank">
            <i className="fas fa-child" aria-hidden="true"/>
           </a>
            {/*Visual Link To Explore Page*/}
            <a href="http://google.com"rel="noopener noreferrer" target="_blank">
           <i className="fas fa-eye" aria-hidden="true"/>
           </a>

           
           

          </div>
          </div>
      </Cell>
     </Grid>
     </div>
    
    
    );
  }
}

export default Homepage;
