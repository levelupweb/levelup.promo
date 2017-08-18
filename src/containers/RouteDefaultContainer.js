import React from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";
import './RouteDefaultContainer.css';

const RouteDefaultContainer = ({ component, configuration }) =>
	<Route
		render={props => {
			return (
				<div className="DefaultContainer">
					<div className="site-content">
						{React.createElement(component, { configuration })}
					</div>
				</div>
			);
		}}
	/>;

RouteDefaultContainer.propTypes = {
	component: propTypes.func.isRequired
}

export default RouteDefaultContainer;
