import PropTypes from "prop-types";
import React from 'react';

const numbers = [1, 2, 3, 4];

export const Cards = ({ ...props }) => {
	return (
		<div className="card-group">
			{numbers.map((number, index) => {
				return (
					<div key={index} className="card">
						<img
							className="card-img-top"
							src={props.imgUrl}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{props.title+number}</h5>
							<p className="card-text">{props.description}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

Cards.propTypes = {
	imgUrl: PropTypes.string,
	description: PropTypes.string,
	title: PropTypes.string,
};
