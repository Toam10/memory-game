import actionType from "../constants/constants.index";

const loadDataReducer = (state = [], action = {}) => {
	switch (action.type) {
		case actionType.LOAD_DATA:
			return action.payload;
		default:
			return state;
	}
};

export default loadDataReducer;
