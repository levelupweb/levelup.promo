const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config").server;
const { checkContactData, emailContactHandler } = require("./emailContact");
const React = require("react");
const { renderToString } = require("react-dom/server");
const StaticRouter = require("react-router-dom/StaticRouter").default; // es6 hack
const App = require("./src/components/app").default; // es6 hack
const document = require("./document");

const http = require("http");

const app = express();

app.use(config.static, express.static(path.join(__dirname, config.static)));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/politics", (_, res) => res.sendFile(__dirname + "/politics.rtf"));

app.get("*", (req, res) => {
	res.send(document());
});

app.post(config.contactposturl, [...checkContactData], emailContactHandler);

const server = http.createServer(app);

server.listen(config.port, err => {
	if (err) {
		console.log(err);
		return;
	}

	console.log(`-> smm.levelupworlds.com on port: ${config.port}`);
	console.log(`-> Address: ${config.hosturl}`);
});
