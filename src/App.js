import React from "react";
import "./App.scss";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Contacts from "./Contacts";
import About from "./pages/About";
import Header from "./Layout/Header";
import { Provider } from "./Context"; // Import Provider from Context.js

import AddContact from "./AddContact";

function App() {
  return (
    //We need to wrap everything inside the Provider Component.
    <Provider>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact/addContact" component={AddContact} />
          </Switch>
      </Router>
    </Provider>
  );
}
export default App;
