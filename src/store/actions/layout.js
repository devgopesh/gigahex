import * as actions from './actionTypes'

export const apartment = () => {
	return {
		type: actions.APARTMENT
	}
}

export const house = () => {
	return {
		type: actions.HOUSE
	}
}

export const accomodationType = (accType) => {
	return dispatch => {
		if (accType === 'apartment') {	
			dispatch(apartment());
		} else if(accType === 'house'){
			dispatch(house());
		}
	}
}