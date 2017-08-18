import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from "./registerServiceWorker";
import App from './components/app/App.js';
import config from './config.js';

ReactDOM.render(
	<HashRouter>
		<App configuration={config} />
	</HashRouter>,
	document.getElementById("root")
);
registerServiceWorker();
