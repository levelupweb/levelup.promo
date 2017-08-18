import React from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";
import './RouteDefaultContainer.css';

const RouteDefaultContainer = ({ component }) =>
	<Route
		render={props => {
			return (
				<div className="DefaultContainer">
					<div className="site-content">
						{React.createElement(component)}
					</div>
				</div>
			);
		}}
	/>;

RouteDefaultContainer.propTypes = {
	component: propTypes.func.isRequired
}

export default RouteDefaultContainer;
