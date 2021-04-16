import actionType from "../constants/constants.index";

const scoreReducer = (state = 0, action = {}) => {
	switch (action.type) {
		case actionType.GET_SCORE:
			return state;
		default:
			return state;
	}
};
export default scoreReducer;
