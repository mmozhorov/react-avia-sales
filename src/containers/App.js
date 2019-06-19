import React from 'react';
import 'bootstrap3/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import { createStore } from "redux";
import Header from '../components/Header';
import FilterContainer from '../containers/FilterContainer';
import TicketContainer from '../containers/TicketsContainer';

import './App.css';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
            <TicketContainer/>
          </div>
        </div>
      </Provider>
  );
}

export default App;
