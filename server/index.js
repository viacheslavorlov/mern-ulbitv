const router = require('./routes/auth.routes')
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
const PORT = config.get('serverPort');

app.use(express.json());
app.use('/api/auth', router);

const start = async () => {
	try {

		app.listen(PORT, () => {
			console.log('server on port', PORT);
		})

		await mongoose.connect(config.get("dbUrl"))
	} catch (e) {
		console.log(e)
	}
}

start();
//login
// viacheslavorlov
// password
// 661683