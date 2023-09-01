import React from "react";
import NavBar from './NavBar.jsx';
import {Jumbotron} from './Jumbotron.jsx';
import CardLG from './cardLGMM.jsx';
import Footer from './Footer.jsx';


const Home = () => {
	return (
		<div className="container text-center">
			<NavBar/>
			<Jumbotron/>
			<div className="container-fluid">
				<CardLG />
				<CardLG />
				<CardLG />
				<CardLG />
			</div>
			<Footer />

		</div>
	);
};

export default Home;
