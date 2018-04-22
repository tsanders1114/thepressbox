import React, { Component } from 'react';
// import {
// Switch
// } from 'react-router-dom';
import independent from '../../Assets/images/independent.jpg';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      emailAddress: '',
      message: '',
    }
  }
  contactFunc() {

    console.log("Function Executed!");    
    // Now we need to post the data, one of the most used module is axios
    axios.post('http://localhost:3001/contact', this.state)
      .then(function (response) {
        alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // 
    }

    render() {
      return (
        <div>
          <div className="jumbotron jumbotron-sm">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-12">
                  <h1 className="h1">
                    Contact us <small>Feel free to contact us</small></h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="well well-sm">
                  <form className="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="name">
                            Name</label>
                          <input className="name-input"
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter name"
                            required="required"
                            onChange={event => this.setState({ name: event.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label className="email">
                            Email Address</label>
                          <div className="input-group">
                            <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                            </span>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter email"
                              required="required"
                              onChange={event => this.setState({ emailAddress: event.target.value })}
                            />
                          </div>
                        </div>

                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="message">
                            Message</label>
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            rows="9"
                            cols="25"
                            required="required"
                            placeholder="Message"
                            onChange={event => this.setState({ message: event.target.value })}
                          />

                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn btn-primary pull-right"
                          id="btnContactUs"
                          onClick={() => this.contactFunc.bind(this)}>
                          Send Message</button>

                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <img src={independent} />
              </div>
            </div>
          </div>
        </div>



      );
    }
  }

  export default Contact;
