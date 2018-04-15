import React, { Component } from 'react';
import './Assets/css/default.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
}from 'react-router-dom';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Featured from './components/pages/featuredIndpendence';
import Signup from './components/pages/signupPage.jsx';

 


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header/>
      
      <Switch>
      <Route exact path='/'component={Homepage}/>
      <Route exact path='/Featured'component={Featured}/>
      <Route exact path='/Signup'component={Signup}/>
      <Route exact path='/About'component={About}/>
      <Route exact path='/Contact'component={Contact}/>
      </Switch>
      
      <Footer/>
        
      </div>
      </Router>
    );
  }
}

export default App;
