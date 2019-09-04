import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Sort from '../../components/Sort';
import CardList from '../../components/CardList';
import Filters from '../../components/Filters';

import {
  getCurrentSortField,
  getDisplayData,
  getFiltersByFieldName,
  getOptions,
} from '../../selectors'

import {
  changeFilter,
  changeSortOrder,
  resetFilter
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

  /**
  * @desc reset the selected filter, update the central state and then updates the sort action
  * @param string $filteredBy - we need to know which value on state to reset, either 'filteredBy1' or 'filteredBy2'
  * @return n/a. It calls 2 actions, 'RESET_FILTER' and 'SORT_..' depending on the current sort field
  */
  resetFilter = (filteredBy) => {
    this.props.reset(filteredBy)
    this.props.changeSorting(this.props.currentSortField);
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
              id="filteredBy1"
              handleFilterClick={this.handleFilterClick}
              options={this.props.filterOptions('departureDate')}
              resetFilter={this.resetFilter}
              title='filter by departure date'
              />
          </div>
          <div className="divider">
            <Filters
              id="filteredBy2"
              handleFilterClick={this.handleFilterClick}
              options={this.props.filterOptions('departAirport')}
              resetFilter={this.resetFilter}
              title='filter by departure airport'
              />
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
    currentSortField: getCurrentSortField(state),
    displayData: getDisplayData(state),
    filterOptions: (fieldName) => getFiltersByFieldName(fieldName, state),
    options: getOptions(state),
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeSorting: changeSortOrder,
  changeFiltering: changeFilter,
  reset: resetFilter

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
