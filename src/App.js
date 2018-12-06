import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Header from './layouts/Header.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './Context';
import NotFound from './NotFound';

import Start from './components/Start';

class App extends Component {
  render() {
    return (
      /* This one works as the provider to its children. */
      <Provider>
        <Router>
          <div className="mt-5 App container col-md">
            <h1 className="display-3 text-center">The Phone Shop</h1>
            <Header title="Phones" />
            <Switch>
              {/* This is used to access the different components without having to reload the page */}
              <Route exact path="/" component={Home} />
              <Route exact path="/start" component={Start} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
