import actionType from "../constants/constants.index";

export const userName = (name) => ({
	type: actionType.GET_USER_NAME,
	payload: name,
});
export const getScore = () => ({
	type: actionType.GET_SCORE,
});

export const flipCard = (card) => ({
	type: actionType.FLIP_CARD,
	payload: card,
});

export const loadData = (data) => ({
	type: actionType.LOAD_DATA,
	payload: data,
});
