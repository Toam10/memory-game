export const unFlipCards = (cardsData, dispatch, clearFlipCards) => {
	setTimeout(() => {
		console.log("not the same cards");
		cardsData.forEach((card) => (card.isFlipped = false));
		return dispatch(clearFlipCards());
	}, 3000);
};

export const handleFlippedCard = (flipCardFromState, card, dispatch, flipCard) => {
	if (flipCardFromState.length < 2) {
		if (!card.isFlipped) {
			card.isFlipped = true;
			dispatch(flipCard(card));
		}
	}
};

export const handleDiscoverdCards = (filterFlipCards, cardsData, dispatch, clearFlipCards) => {
	filterFlipCards.forEach((card) => {
		cardsData[card.id].discoverd = true;
		cardsData[card.id].isFlipped = false;
	});
	return dispatch(clearFlipCards());
};
