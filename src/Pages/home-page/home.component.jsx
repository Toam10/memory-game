import React, { useState } from "react";
import "./home.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { userName } from "../../actions/actions.index";
import { Link } from "react-router-dom";

const HomePage = () => {
	const [userNameValue, setUserNameValue] = useState("");
	const dispatch = useDispatch();

	const inputHandler = ({ target }) => {
		setUserNameValue(target.value);
	};

	const onSubmit = () => {
		dispatch(userName(userNameValue));
	};

	return (
		<div className='home-page'>
			<h1 className='home-page-header'>
				Memory Game <hr />
			</h1>
			<p>please write your name</p>
			<input className='username-input' onChange={inputHandler} type='text' />
			<Link className='link-to-game' onClick={onSubmit} to='/game'>
				Start
			</Link>
		</div>
	);
};

export default HomePage;
