import React,  {Component} from 'react';
// import{
  // Switch
// }from 'react-router-dom';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }

  signUp(event){
    console.log('this.state',this.state);
    event.preventDefault();

		axios.post('http://localhost:3001/signup', this.state)
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
      <h2>Sign Up</h2>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="email"
          onChange={event =>this.setState({email:event.target.value})}
        />
        <input
          className="form-control"
          type="password"
          placeholder="password"
          onChange={event =>this.setState({password:event.target.value})}
          
        />
        <button
          clasName="btn btn-primary"
          type="button"
          onClick={()=>this.signUp()}
        >
        Sign Up
        </button>
        </div>

      </div>
     

     
    
    );
  }
}

export default Signup;
