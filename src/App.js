import React, { Component } from 'react';
import './Assets/css/default.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/headerComponent/header';
// import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Featured from './components/pages/featuredIndpendence';
import Signup from './components/pages/signupPage.jsx';
import Signin from './components/pages/signinPage.jsx';


import SampleIndie from './components/pages/sampleIndie';
import SouthAmerica from './components/pages/southAmericaContent';
import NorthAmerica from './components/pages/northAmericaContent';

import SouthContent from './components/pages/southAmericaContent';
import EuropeContent from './components/pages/europeContent';
import NorthContent from './components/pages/northAmericaContent';
import AcimvasicIndie from './components/pages/acimvasic';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header /> 
          
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/Featured' component={Featured} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/SampleIndie'component={SampleIndie}/>
            <Route exact path='/NorthContent'component={NorthContent}/>
            <Route exact path='/SouthContent'component={SouthContent}/>
            <Route exact path='/EuropeContent'component={EuropeContent}/>
            <Route exact path='/AcimvasicIndie'component={AcimvasicIndie}/>
          </Switch>


        </div>
        
      </Router>
    );
  }
}

export default App;
