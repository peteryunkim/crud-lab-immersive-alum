
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
	restaurants: []
}, action) {
	switch (action.type){
		case 'ADD_RESTAURANT':
			const newRestaurant = Object.assign({}, action.restaurant, {id: cuid()})
			return { restaurants: state.restaurants.concat(newRestaurant)}
		case 'DELETE_RESTAURANT':
			const deletedRestaurant = state.restaurants.filter( rest => rest.id !== action.id )
			return { restaurants: deletedRestaurant}
	default:
		return state
	}
	
}