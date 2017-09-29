import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
  	super()
  	this.state={
  		text: ''
  	}
  }

  handleChange = (event) => {
  	this.setState({
  		text: event.target.value
  	})
  }

  handleSubmit = (event) => {
  	event.preventDefault()
  	this.props.store.dispatch({
  		type: 'ADD_REVIEW',
  		text: this.state,
  		id: this.props.restaurantID
  	})
  }

  render() {
    return (
    	<div>
	      <form onSubmit={this.handleSubmit}>
	      	<input type='text' onChange={this.handleChange} value={this.state.text}/>
	      	<input type='submit' />
	      </form>
	      <Reviews store={this.props.store} id={this.props.restaurantID}/>
	    </div>	
    );
  }
};

export default ReviewInput;
