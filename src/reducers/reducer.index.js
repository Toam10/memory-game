import { combineReducers } from "redux";
import flipCard from "./reducer.flipCard";
import userNameReducer from "./reducer.user-name";
import scoreReducer from "./reducer.score";
const allReducers = combineReducers({
	flipCard,
	userName: userNameReducer,
	score: scoreReducer,
});

export default allReducers;
