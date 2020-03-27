import React from "react";

import EditUser from "./EditUserComponent";
import { Consumer } from "./Context"; // Import Consumer from Context.js
class Contacts extends React.Component {
  state = {
    editeUser: false
  };
  editUserState = () => {
    this.setState({
      editeUser: !this.state.editeUser
    });
  };

  deleteUser = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { editeUser } = this.state;
    return (
      //Value is coming from state in Context.js
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div>
                <h1>User list</h1>
              {contacts.map((contact, index) => (
                <div className="card" key={index}>
                  {editeUser ? (
                    <EditUser editUserFunction={this.editUserState} />
                  ) : (
                    <div className="card-body">
                      <h5 className="card-title">{contact.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {contact.email}
                      </h6>
                      <p className="card-text">{contact.phone}</p>
                      <button
                        onClick={() => {
                          this.deleteUser(contact.id, value.dispatch);
                        }}
                      >
                        Delete User
                      </button>
                      <button
                        onClick={e => {
                          this.setState({
                            editeUser: !this.state.editeUser
                          });
                        }}
                      >
                        {" "}
                        Edite Contact
                      </button>
                      <hr />
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
