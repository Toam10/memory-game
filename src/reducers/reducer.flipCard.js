import actionType from "../constants/constants.index";




const flipCardReducer = (state = [], action = {}) => {
	switch (action.type) {
		case actionType.FLIP_CARD:
			return [...state, action.payload]
		default:
			return state;
	}
};

export default flipCardReducer;
