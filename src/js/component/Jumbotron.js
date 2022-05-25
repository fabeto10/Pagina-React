import PropTypes from "prop-types";
import React from "react";

var hoy = new Date();

export const Jumbotron = (props) => {
	return (
		<div className="jumbotron">
			<div className="justify-content-center">
				<h1 className="display-4">{`Hello, world! today is: ${
					hoy.getDate() +
					"-" +
					(hoy.getMonth() + 1) +
					"-" +
					hoy.getFullYear()
				}`}</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classNamees for typography and spacing to
					space content out within the larger container.
				</p>
				<p className="lead">
					<a className="btn btn-danger btn-lg" href="#" role="button">
						Learn more
					</a>
				</p>
			</div>
		</div>
	);
};
