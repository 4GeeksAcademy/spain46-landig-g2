
import React from "react";

// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import propTypes from "prop-types";

// Create your first component

const Home = {
	title: "titulo",
	text: "texto ejemplo",
	btnLabel: "boton ejemplo",
	btnURL: "URL ejemplo",
	imgURL: rigoImage

};

const output = (props) => {
	return (
		<div class="row g-4 p-5 mb-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
			<div className="card" style={{ width: '18rem' }}>
				<img src={rigoImage} className="card-img-top" alt="Card Image" />


				<div className="card-body">
					<h5 className="card-title"> {Home.title} </h5>
					<p className="card-text"> {Home.text} </p>
					<a href= {Home.btnURL}  className="btn btn-primary">{Home.btnLabel}</a>
				</div>
			</div>
		</div>

	)
};

Home.propTypes = {
	text: propTypes.string,
	btnLabel: propTypes.string,
	btnURL: propTypes.string,
	title: propTypes.string,
	imgURL: propTypes.string
};


export default output;
