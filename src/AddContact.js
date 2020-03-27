import React from "react";
import { Consumer } from "./Context";

//import uuid from "uuid"; TODO use uuid if you are using visual code

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phrase: ""
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = (dispatch, e) => {
    //Todo search about the order of the paramaters
    e.preventDefault();
    const { name, email, phrase } = this.state;
    const newUser = {
      name,
      email,
      phrase
    };
    dispatch({ type: "ADD_CONTACT", payload: newUser });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phrase } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <>
              <h1>Add Contact</h1>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <label>Name: </label>
                <input
                  type="text"
                  value={name}
                  name="name"
                  placeholder="Enter the name..."
                  onChange={this.onChange}
                />
                <br />
                <br />
                <label>Email : </label>
                <input
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Enter the email..."
                  onChange={this.onChange}
                />
                <br />
                <br />
                <label>Phrase: </label>
                <input
                  type="text"
                  value={phrase}
                  name="phrase"
                  placeholder="Enter the phrase..."
                  onChange={this.onChange}
                />
                <br />
                <br />
                <input type="submit" value="Add Contact" />
              </form>
            </>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
