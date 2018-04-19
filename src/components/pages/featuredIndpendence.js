import React,  {Component} from 'react';
import africa from '../../Assets/images/africa.jpg';
import europe from '../../Assets/images/europe.jpg';
import northAmerica1 from '../../Assets/images/northAmerica1.jpg';
import southAmerica from '../../Assets/images/southAmerica.jpg';

import {
  Switch
}from 'react-router-dom';

class Featured extends Component {
  render() {
    return (

      <div className="jumbotron">
              <iframe className="intro-video" width="500" height="500" src="https://www.youtube.com/embed/sVDXQJlqqmk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>  

      <div className="row">
      
      <div className="col-xs-6 col-md-3">
        <a href="#" class="thumbnail">
          <img src={africa} alt="..."/>
          <div className="caption">
          <a href="#" class="btn btn-primary" role="button">Button</a>
          </div> 
          <p>Africa Creative Works</p>
          </a>
           </div>

          
          <div className="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
            <img src={europe} alt="..."/>
            <p>Europe Creative Works</p>
          </a>
          </div>
          
          <div className="col-xs-6 col-md-3">
              <a href="#" class="thumbnail">
                <img src={northAmerica1}alt="..."/>
                <p>North American Creative Works</p>
            </a>
         </div> 

         <div className="col-xs-6 col-md-3">
              <a href="#" class="thumbnail">
                <img src={southAmerica}alt="..."/>
                <p>South American Creative Works</p>
            </a>
         </div> 
      </div>
</div>

  
   
    
    );
  }
}

export default Featured;
