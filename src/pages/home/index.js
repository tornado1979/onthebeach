import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Sort from '../../components/Sort';
import CardList from '../../components/CardList';

import {
  getDisplayData,
  getOptions,
} from '../../selectors'

import {
  changeSortOrder
} from '../../actions'

import '../style.scss';

class Home extends Component {
  constructor(props) {
    super(props)
  }


  componentDidMount(){
    // Default hotels sort is Alphabeticaly
    // call action 'changeSorting()'
    this.props.changeSorting(0);
  }

  handleSortClick = (selectedOption) => {
    // call action 'changeSorting()'
    this.props.changeSorting(selectedOption.id);
  }

  render(){
    return(
      <div className="home-page">
        <div className="home-left-column">
          <Sort handleSortClick={this.handleSortClick} options={this.props.options}/>
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
    options: getOptions(state),
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changeSorting: changeSortOrder,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
