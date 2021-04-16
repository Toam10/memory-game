import actionType from "../constants/constants.index";

const userNameReducer = (state = "", action = {}) => {
	switch (action.type) {
		case actionType.GET_USER_NAME:
			return action.payload;
		default:
			return state;
	}
};

export default userNameReducer;
