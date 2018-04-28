import React, { Component } from 'react';
import independent from '../../Assets/images/independent.jpg';
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
                            <iframe width="300" height="200" src="https://www.youtube.com/embed/Z1Ip5HQ5m8o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            <a href="/SampleIndie" data-toggle="collapse">
                                <button class="btn btn-default btn-lg" type="button" aria-haspopup="true" aria-expanded="false">
                                    Large button
                                </button>
                                </a>
                                {/* <a href="" className="thumbnail" /> */}
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
                            ...
      </div>
                    </div>
                </div>

                );
            }
        }
        
export default NorthContent;