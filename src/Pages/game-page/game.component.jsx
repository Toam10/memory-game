import React, { useEffect } from "react";
import "./game.styles.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/card/card.component";
import { cardsData } from "../../DATA/card.data";
import { loadData } from "../../actions/actions.index";
const GamePage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadData(cardsData));
	}, [dispatch]);
	const userName = useSelector((state) => state.userName);
	const score = useSelector((state) => state.score);
	const cardsDataFromState = useSelector((state) => state.cardsData);
	return (
		<div className='game-page'>
			<h1 className='game-page-welcom-header'>
				welcome {userName.charAt(0).toUpperCase() + userName.slice(1)} <hr />
			</h1>
			<h3 className='total-score'>your Score: {score} </h3>
			<div className='cards-container'>
				{cardsDataFromState.map((card, index) => (
					<Card key={index} id={card.id} card={card} />
				))}
			</div>
		</div>
	);
};

export default GamePage;
