import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeCurrency, changeTransferCount} from "../actions/FilterActions";
import CurrencyComponent from '../components/CurrencyComponent';
import TranferCountComponent from '../components/TransferCountComponent';
import "./FilterContainer.css";

class FilterContainer extends Component{
    render() {
        return(
          <div className="filter-container">
              <CurrencyComponent changeCurrency={this.props.changeCurrency}/>
              <TranferCountComponent changeTransferCount={this.props.changeTransferCount} />
          </div>
        );
    }
}


const mapStateToProps = state => ({
    isSetParameters : state.FilterReducer.isSetParameters,
    customParameters : state.FilterReducer.customParameters
});


export default connect(mapStateToProps , { changeCurrency , changeTransferCount })(FilterContainer);