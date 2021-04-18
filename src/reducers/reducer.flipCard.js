import actionType from "../constants/constants.index";

const flipCardReducer = (state = [], action = {}) => {
	switch (action.type) {
		case actionType.FLIP_CARD:
			return [...state, action.payload];
		case actionType.CLEAR_FLIP_CARDS:
			return (state = []); // can do splice
		default:
			return state;
	}
};

export default flipCardReducer;
