import React from "react";

const style1 = {
	backgroundColor: "rgba(0, 0, 0, 0.2)",
};
const style2 = {
	backgroundColor: "#21081a",
};
export const Footer = () => {
	return (
		<footer className="text-center text-white" style={style2}>
			<div className="container p-4"></div>
			<div className="text-center p-3" style={style1}>
				{"© 2022 Copyright: "}
				<a className="text-white" href="https://github.com/fabeto10">
					{"GitHub"}
				</a>
			</div>
		</footer>
	);
};
