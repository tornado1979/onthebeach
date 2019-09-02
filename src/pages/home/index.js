import React, { Component } from 'react'
import Sort from '../../components/Sort';

const options = [{
  symbol: 'AZ',
  text: 'sort alphabetically',
},
{
  symbol: 'price',
  text: 'Sort by price',
},
{
  symbol: 'star',
  text: 'sort by star rating',
},
]
class Home extends Component {
  constructor(props) {
    super(props)
  }

  handleSortClick = (event) => {
    console.log('sort clicked', event.target);
  }

  render(){
    return(
      <>
        <div>HOME PAGE</div>
        <Sort handleSortClick={this.handleSortClick} options={options}/>
      </>
    )
  }
}

export default Home;
