import React, { useEffect } from "react";
import "./card.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { flipCard } from "../../actions/actions.index";
const Card = ({ card, id }) => {
	const cardsData = useSelector((state) => state.cardsData);
	const flipCardFromState = useSelector((state) => state.flipCard);
	const dispatch = useDispatch();
	const handleFlippedCard = () => {
		if (flipCardFromState.length < 2) {
			if (!card.isFlipped) {
				card.isFlipped = true;
				dispatch(flipCard(card));
			}
		}
	};
	useEffect(() => {
		const filterFlipCards = cardsData.filter((card) => card.isFlipped);
		if (flipCardFromState.length === 2) {
			const cardColor = filterFlipCards.length !== 0 ? filterFlipCards[0].color : [];
			const sameCards = filterFlipCards.every((card) => card.color === cardColor);
			if (sameCards) {
				filterFlipCards.forEach((card) => (cardsData[card.id].discoverd = true));
				filterFlipCards.forEach((card) => (cardsData[card.id].isFlipped = false));
				return console.log(cardsData);
			} else {
				setTimeout(() => {
					cardsData.forEach((card) => (card.isFlipped = false));
					console.log(cardsData);
				}, 3000);
			}
		}
	}, [cardsData, flipCardFromState.length]);

	return (
		<div onClick={handleFlippedCard} className='flip-card'>
			<div className='flip-card-inner'>
				<div className='flip-card-front'></div>
				<div className='flip-card-back'>
					<h1>text</h1>
				</div>
			</div>
		</div>
	);
};

export default Card;
