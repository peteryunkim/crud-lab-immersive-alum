import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {
  render() {
  		const restaurantList = this.props.store.getState().restaurants.map((restaurant, index)=> <Restaurant key={index} store={this.props.store} restaurant={restaurant}/>)
    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;