import React from 'react';
import './App.css';

// navigation
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';

// redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/cart' component={Cart} />
            </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
