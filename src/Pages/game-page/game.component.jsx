import React from "react";
import "./game.styles.css";
import { useSelector } from "react-redux";
import Card from "../../Components/card/card.component";
import { cardsData } from "../../DATA/card.data";

const GamePage = () => {
	const userName = useSelector((state) => state.userName);
	const score = useSelector((state) => state.score);

	return (
		<div className='game-page'>
			<h1 className='game-page-welcom-header'>
				welcome {userName.charAt(0).toUpperCase() + userName.slice(1)} <hr />
			</h1>
			<h3 className='total-score'>your Score: {score} </h3>
			<div className='cards-container' >

			{cardsData.map((card) => (
				<Card  key={card.id} id={card.id} {...card} />
				))}
				</div>
		</div>
	);
};

export default GamePage;
