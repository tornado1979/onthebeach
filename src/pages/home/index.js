import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Sort from '../../components/Sort';
import CardList from '../../components/CardList';
import Filters from '../../components/Filters';

import {
  getDisplayData,
  getFiltersByFieldName,
  getOptions,
} from '../../selectors'

import {
  changeFilter,
  changeSortOrder
} from '../../actions'

import '../style.scss';

class Home extends Component {

  componentDidMount(){
    // Default hotels sort is Alphabeticaly
    // call action 'changeSorting()'
    this.props.changeSorting(0);
  }

  handleSortClick = (selectedOption) => {
    // call action 'changeSorting()'
    this.props.changeSorting(selectedOption.id);
  }

  handleFilterClick = (selectedValue, fieldName) => {
    // call action 'changeFiltering()'
    this.props.changeFiltering(selectedValue, fieldName);
  }
  render(){
    return(
      <div className="home-page">
        <div className="home-left-column">
          <div className="divider">
            <Sort
              defaultActive={0}
              handleSortClick={this.handleSortClick}
              options={this.props.options.sort}
            />
          </div>
          <div className="divider">
            <Filters
              handleFilterClick={this.handleFilterClick}
              options={this.props.filterOptions('departureDate')}/>
          </div>
          <div className="divider">
            <Filters
              handleFilterClick={this.handleFilterClick}
              options={this.props.filterOptions('departAirport')}/>
          </div>
        </div>
        <div className="home-right-column">
          <CardList cards={this.props.displayData}/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    displayData: getDisplayData(state),
    filterOptions: (fieldName) => getFiltersByFieldName(fieldName, state),
    options: getOptions(state),
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeSorting: changeSortOrder,
  changeFiltering: changeFilter,

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
