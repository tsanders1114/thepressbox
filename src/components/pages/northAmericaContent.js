import React, { Component } from 'react';
// import indiemusic3 from '../../Assets/images/.jpg';
import borns from '../../Assets/images/borns.jpg';
import Max from '../../Assets/images/Max.jpg';
import again from '../../Assets/images/again.png';
import james from '../../Assets/images/james.jpg';
import acim from '../../Assets/images/acim.jpg';
import indiefilm from '../../Assets/images/indiefilm.jpg';
import indiemusic3 from '../../Assets/images/indiemusic3.jpg';



import northAmerica from '../../Assets/images/northAmerica.jpg';


// import { Grid, Cell } from 'react-mdl';
// import {
// Switch
// } from 'react-router-dom';
// import Footer from '../footerComponent/footer';
import CSS from "./homepage.css";


class NorthContent extends Component {
    render() {
        return (
            <div className="northcontainer1">
                <div class="jumbotron">
                    <h1>North America Creators</h1>
                    <img src={northAmerica} alt="Random Name" width="100" height="200" />
                </div>
                <div class="video-container">
                    <div className="row">
                        <h2>Indie Film Creators</h2>
                        <div className="col-xs-6 col-md-3">
                            <img src={Max} class="img-circle person" alt="Random Name" width="355" height="255" /> 
                            <a href="/SampleIndie" data-toggle="collapse">
                                <button class="btn btn-default btn-lg" type="button" aria-haspopup="true" aria-expanded="false">
                                    Maximilian Raboin
                                </button>
                            </a>
                            {/* <a href="" className="thumbnail" /> */}
                            {/* <img src="#" alt="#" /> */}
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <img src={acim} class="img-circle person" alt="Random Name" width="355" height="255" />

                            <a href="/AcimvasicIndie" data-toggle="collapse">
                                <button class="btn btn-default btn-lg" type="button" aria-haspopup="true" aria-expanded="false">
                                    Aćimvasić
                                </button>
                            </a>
                            {/* <a href="#" className="thumbnail" /> */}
                            {/* <img src="#" alt="#" /> */}
                        </div>
                        <div className="row">
                            <div className="col-xs-3 col-md-5">
                                <img src={indiefilm} /> 
                            </div>
                        </div>


                        ...
      </div>
                    <div className="row">
                        <h2>Indie Music Creators</h2>
                        <div className="col-xs-6 col-md-3">
                        <img src={borns} class="img-circle person" alt="Random Name" width="355" height="255" /> 
                       
                            <a href="/BornsIndie" data-toggle="collapse">
                                <button class="btn btn-default btn-lg" type="button" aria-haspopup="true" aria-expanded="false">
                                BØRNS 
                                </button>
                            </a>
                            {/* <a href="#" className="thumbnail" /> */}
                            {/* <img src="#" alt="#" /> */}
                        </div>

                        <div className="col-xs-6 col-md-3">

                        <img src={james} class="img-circle person" alt="Random Name" width="355" height="255" /> 

                            <a href="/JamesBayIndie" data-toggle="collapse">
                                <button class="btn btn-default btn-lg" type="button" aria-haspopup="true" aria-expanded="false">
                                James Bay
                                </button>
                            </a>
                            {/* <a href="#" className="thumbnail" /> */}
                            {/* <img src="#" alt="#" /> */}
                        </div>
                        <div className="row">
                            <div className="col-xs-3 col-md-5">
                                <img src={indiemusic3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NorthContent;