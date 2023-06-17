import React from "react";

//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="container-fluid">
			<div className="row bg-dark text-light justify-content-center">
				<p className="col-1 display-5">{props.segundos6}</p>
				<p className="col-1 display-5">{props.segundos5}</p>
				<p className="col-1 display-5">{props.segundos4}</p>
				<p className="col-1 display-5">{props.segundos3}</p>
				<p className="col-1 display-5">{props.segundos2}</p>
				<p className="col-1 display-5">{props.segundos1}</p>
			</div>
		</div>
	);
};

export default SecondsCounter;