import React from 'react';
import 'bootstrap3/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import { createStore } from "redux";
import { Header } from '../components/Header/Header';
import FilterContainer from './FilterContainer';
import { TicketsListComponent } from '../components/ResultList/TicketsListComponent';

import './App.css';

const store = createStore(
    reducer,
);

function App() {
  return (
      <Provider store={store}>
        <Header/>
        <div className="container">
          <div className="col-md-4 col-xs-12">
              <FilterContainer/>
          </div>
          <div className="col-md-8 col-xs-12">
              <TicketsListComponent />
          </div>
        </div>
      </Provider>
  );
}

export default App;
