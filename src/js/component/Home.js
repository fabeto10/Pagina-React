import React from "react";
// import propTypes from "prop-types";
import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";
import { Cards } from "./Card";
import { Footer } from "./Footer";

export const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Jumbotron />
			<Cards title="Card number: " description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." imgUrl="https://static6.depositphotos.com/1007097/672/i/600/depositphotos_6728955-stock-photo-the-solar-system.jpg" />
			<Footer/>
		</React.Fragment>
	);
};
