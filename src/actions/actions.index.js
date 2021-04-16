import actionType from "../constants/constants.index";

export const userName = (name) => {
	return {
		type: actionType.GET_USER_NAME,
		payload: name,
	};
};
export const getScore = () => {
	return {
		type: actionType.GET_SCORE
	};
};
