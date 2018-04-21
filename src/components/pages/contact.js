import React, { Component } from 'react';
import {
  Switch
} from 'react-router-dom';
import independent from '../../Assets/images/independent.jpg';


class Contact extends Component {
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
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="name">
                          Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter name" required="required" />
                      </div>
                      <div className="form-group">
                        <label for="email">
                          Email Address</label>
                        <div class="input-group">
                          <span className="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                          </span>
                          <input type="email" class="form-control" id="email" placeholder="Enter email" required="required" /></div>
                      </div>
                      <div className="form-group">
                        <label for="subject">
                          Subject</label>
                        <select id="subject" name="subject" class="form-control" required="required">
                          <option value="na" selected="">Choose One:</option>
                          <option value="service">General Customer Service</option>
                          <option value="suggestions">Suggestions</option>
                          <option value="product">Product Support</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="name">
                          Message</label>
                        <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                          placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" class="btn btn-primary pull-right" id="btnContactUs">
                        Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
             <img src={independent}/>s
          </div>
      </div>
            </div>
          </div>



          );
        }
      }
      
      export default Contact;
