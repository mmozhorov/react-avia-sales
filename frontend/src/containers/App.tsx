import React from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux';

import FilterContainer from './FilterContainer';

import { Header } from '../components/Header/Header';
import { TicketsListComponent } from '../components/ResultList/TicketsListComponent';

import reducer from '../reducers';

import 'bootstrap3/dist/css/bootstrap.css';
import './App.css';

const store = createStore(
    reducer,
);

const App = () =>
      <Provider store={store}>
        <Header/>
        <div className="container">
          <div className="col-md-4 col-xs-12">
              <FilterContainer/>
          </div>
          <div className="col-md-8 col-xs-12">
              <TicketsListComponent/>
          </div>
        </div>
      </Provider>

export default App;
