import React, { Component } from 'react';
import indiemusic3 from '../../Assets/images/indiemusic3.jpg';
import indiefilm from '../../Assets/images/indiefilm.jpg';

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
                    <p>...</p>
                    <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                </div>
                <div class="video-container">
                    <div className="row">
                        <h2>Indie Film Creators</h2>
                        <div className="col-xs-6 col-md-3">
                            <h6>A man (Maximilian Raboin) mourning the death of his loved one (Ines Hoeysater Asserson), is psychologically tortured as he follows someone that reminds him of her.</h6>
                            <iframe width="300" height="200" src="https://www.youtube.com/embed/Z1Ip5HQ5m8o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            <a href="/SampleIndie" data-toggle="collapse">
                                <button class="btn btn-default btn-lg" type="button" aria-haspopup="true" aria-expanded="false">
                                    Maximilian Raboin
                                </button>
                            </a>
                            {/* <a href="" className="thumbnail" /> */}
                            {/* <img src="#" alt="#" /> */}
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>In the depths of a snowy forest in an unknown wartime, two soldiers from opposing armies try to outwit each other in a perilous game of Tic-Tac-Toe, until they find themselves outplayed by karma.</h6>

                            <iframe width="300" height="200" src="https://www.youtube.com/embed/He9FeJZua20" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
                            <iframe width="300" height="200" src="https://www.youtube.com/embed/Z1Ip5HQ5m8o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            <a href="/SampleIndie" data-toggle="collapse">
                                <button class="btn btn-default btn-lg" type="button" aria-haspopup="true" aria-expanded="false">
                                    Large button
                                </button>
                            </a>
                            {/* <a href="#" className="thumbnail" /> */}
                            {/* <img src="#" alt="#" /> */}
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <iframe width="300" height="200" src="https://www.youtube.com/embed/Z1Ip5HQ5m8o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            <a href="/SampleIndie" data-toggle="collapse">
                                <button class="btn btn-default btn-lg" type="button" aria-haspopup="true" aria-expanded="false">
                                    Large button
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