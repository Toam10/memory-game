import React from "react";
import { Route } from "react-router";
import "./App.css";
import HomePage from "./Pages/home-page/home.component";
import GamePage from "./Pages/game-page/game.component";

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/game' component={GamePage} />
		</div>
	);
}
export default App;
