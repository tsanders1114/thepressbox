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
      </Cell>
     </Grid>
     </div>
    
    
    );
  }
}

export default Homepage;
