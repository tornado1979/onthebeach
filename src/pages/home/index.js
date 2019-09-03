import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sort from '../../components/Sort';
import CardList from '../../components/CardList';

import {
  getData,
  getOptions,
} from '../../selectors'


import '../style.scss';

class Home extends Component {
  constructor(props) {
    super(props)
  }


  handleSortClick = (event) => {
    console.log('sort clicked', event.target);
  }

  render(){
    return(
      <div className="home-page">
        <div className="home-left-column">
          <Sort handleSortClick={this.handleSortClick} options={this.props.options}/>
        </div>
        <div className="home-right-column">
          <CardList cards={this.props.data}/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    data: getData(state),
    options: getOptions(state),
  }
}

export default connect(mapStateToProps)(Home)
