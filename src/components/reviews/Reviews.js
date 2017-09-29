import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
  	const reviews = this.props.store.getState().restaurants.filter( rest => rest.id === this.props.id )
  	const filtered = reviews.map((review, index) => <Review review={review} key={index} store={this.props.store}/>)
    return (
      <ul>
        {filtered ? filtered : 'no reviews'}
      </ul>
    );
  }
};

export default Reviews;