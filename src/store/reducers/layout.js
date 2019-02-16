import * as actions from '../actions/actionTypes'

const initialState= {
	apartment: false,
	house: false
}

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case actions.APARTMENT:
			return {
				...state,
				apartment: true,
				house: false
			}
		case actions.HOUSE:
			return {
				...state,
				apartment: false,
				house: true
			}
		default:
			return state
	}
}

export default reducer;