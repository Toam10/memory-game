import React from "react";
import "./card.styles.css";

const Card = (props) => {
	console.log(props);
	return (
		<div className='flip-card'>
			<div className='flip-card-inner'>
				<div className='flip-card-front'>
				</div>
				<div className='flip-card-back'>
				</div>
			</div>
		</div>
	);
};

export default Card;
