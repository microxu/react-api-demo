import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
//import { NewCounter } from './counter';
import { store } from './store';
import { HoCDetail } from './components/details'
import  {MovieHome} from './components/movieHome';
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Route path="/" exact component={MovieHome} />
        <Route path='/Detail/:title' component={HoCDetail} />
      </HashRouter >
    </Provider>
  );
}

export default App;
