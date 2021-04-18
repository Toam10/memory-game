import React, { useEffect } from "react";
import "./card.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { flipCard, clearFlipCards } from "../../actions/actions.index";
import { Redirect } from "react-router-dom";
import { unFlipCards, handleFlippedCard, handleDiscoverdCards } from "./card.utils";

const Card = ({ card, id }) => {
	const dispatch = useDispatch();
	console.log(card.icon);
	const cardsData = useSelector((state) => state.cardsData);
	const flipCardFromState = useSelector((state) => state.flipCard);
	const allCardsDiscoverd = cardsData.every((card) => card.discoverd);

	const handleFlipped = () => handleFlippedCard(flipCardFromState, card, dispatch, flipCard);

	useEffect(() => {
		const filterFlipCards = cardsData.filter((card) => card.isFlipped);
		if (flipCardFromState.length === 2) {
			const cardColor = filterFlipCards.length !== 0 ? filterFlipCards[0].color : [];
			const sameCards = filterFlipCards.every((card) => card.color === cardColor);

			if (sameCards) {
				handleDiscoverdCards(filterFlipCards, cardsData, dispatch, clearFlipCards);
			} else {
				unFlipCards(cardsData, dispatch, clearFlipCards);
			}
		}
	}, [allCardsDiscoverd, cardsData, dispatch, flipCardFromState.length]);

	return (
		<div
			onClick={handleFlipped}
			className={card.discoverd ? "flipped" : card.isFlipped ? "flipped" : "flip-card"}
		>
			{allCardsDiscoverd && clearTimeout(setTimeout(function(){
				<Redirect to='/' />
			},3000))}
			{allCardsDiscoverd && cardsData.forEach((card) => (card.discoverd = false))}
			<div
				className={
					card.discoverd
						? "inner-flipped"
						: card.isFlipped
						? "inner-flipped"
						: "flip-card-inner"
				}
			>
				<div className='flip-card-front'></div>
				<div className='flip-card-back'>{card.icon}</div>
			</div>
		</div>
	);
};

export default Card;
