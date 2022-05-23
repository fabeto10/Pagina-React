import React from "react";

//create your first component
export const Navbar = () => {
	return (
		<nav className="navbar bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
				<img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
				Bootstrap
				</a>
			</div>
		</nav>
	);
};

