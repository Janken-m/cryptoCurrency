import React from "react";
import Form from "../Common/Form";
import Joi from "joi";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().required().min(2).label("Username"),
    password: Joi.string().required().min(4).label("Password"),
  });

  doSubmit = () => {
    //vad som händer efter logg in lyckades
    console.log("LOGGAED IN");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password")}
        {this.renderButton("login")}
      </form>
    );
  }
}

export default LoginForm;
