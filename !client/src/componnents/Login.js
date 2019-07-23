import React, { Component } from "react";
import axios from 'axios';
class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: ""
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }
  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e){
      e.preventDefault();
      axios.post('http://localhost:3000/auth', {
          email: this.state.email,
          password: this.state.password
      })
      .then(res => localStorage.setItem('cool-jwt', res.data.token));
      // .then(res=> {console.log(res)})
  }

  render() {
    return (
      <div>
        <form onSubmit = {e => this.submit(e)}>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            onChange={e => this.change(e)}
            value={this.state.email}
          />
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            onChange={e => this.change(e)}
            value={this.state.password}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
