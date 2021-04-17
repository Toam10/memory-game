import { combineReducers } from "redux";
import flipCard from "./reducer.flipCard";
import userNameReducer from "./reducer.user-name";
import scoreReducer from "./reducer.score";
import loadDataReducer from "./reducer.load-data";
const allReducers = combineReducers({
	flipCard,
	userName: userNameReducer,
	score: scoreReducer,
	cardsData: loadDataReducer,
});

export default allReducers;
