import React, { useState } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState("red");

	return (
		<div className="body">
			<div className="traffic">
				<div
					onClick={() => setColor("red")}
					className={`light red ${
						color === "red" ? "bright" : ""
					}`}></div>
				<div
					onClick={() => setColor("yellow")}
					className={`light yellow ${
						color === "yellow" ? "bright" : ""
					}`}></div>
				<div
					onClick={() => setColor("green")}
					className={`light green ${
						color === "green" ? "bright" : ""
					}`}></div>
			</div>
		</div>
	);
};
