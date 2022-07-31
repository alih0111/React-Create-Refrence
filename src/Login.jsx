import React, { Component } from "react";

export default class Login extends Component {

  constructor(props){
    super(props)

    // this.usernameInput=React.createRef()

    this.setref=element=>{
      this.textInput=element
    }
    this.focustext=()=>{
      if(this.textInput)this.textInput.focus()
    }
  }

  componentDidMount(){
  //   this.usernameInput.current.focus()
  this.focustext()
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form method="post">
          <input
            type="text"
            name="u"
            placeholder="Username"
            required="required"
            // ref={this.usernameInput}
            ref={this.setref}
          />
          <input
            type="password"
            name="p"
            placeholder="Username"
            required="required"
          />
          <button type="submit" className="btn btn-primary btn-block btn-large">
            Let me in
          </button>
        </form>
      </div>
    );
  }
}
