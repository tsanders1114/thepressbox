import React,  {Component} from 'react';

import axios from 'axios';
class Signin extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }

  signIn(event){
    console.log('this.state',this.state);
    // event.preventDefault();
		axios.post('http://localhost:3001/signin', this.state)
			.then(function (response) {
				alert(response.data);
			})
			.catch(function (error) {
				alert(error);
			});
  }
  render() {
    return (
     <div className="form-inline">
      <h2>Sign In</h2>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="email"
          onChange={event =>this.setState({username:event.target.value})}
        />
        <input
          className="form-control"
          type="password"
          placeholder="password"
          onChange={event =>this.setState({password:event.target.value})}
          
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={()=>this.signIn()}
        >
        Sign In
        </button>
        </div>

      </div>
    );
  }
}

export default Signin;
