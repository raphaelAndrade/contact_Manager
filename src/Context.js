import React from "react";

const Context = React.createContext(); // Initializing Context Instance

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state, //TODO
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends React.Component {
  state = {
    // This is the state that we wanna share between Components
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    //We will fetch the data after the DOM mount the component.
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      response
        .json()
        .then(data => {
          this.setState({
            contacts: data
          });
        })
        .catch(erro => {
          console.log(`this is a error ${erro}`);
        });
    });
  }

  render() {
    return (
      //Return the Provider with the data that we wanna share between components. Everything that we have inside Value, will be visible for all components.
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer; // Export the Consumer. We need to import the Consumer where we want to use the data.
