import React from "react";

//create your first component
export const Navbar = () => {
	return (
		<nav className="navbar bg-secondary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<i className="fas fa-atlas"></i> Pagina React
				</a>
			</div>
		</nav>
	);
};
