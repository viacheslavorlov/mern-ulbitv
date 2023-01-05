const authRouter = require('./routes/auth.routes')
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require("./middleware/cors.middleware");
const fileRouter = require('./routes/file.routes')
const app = express();
const PORT = config.get('serverPort');

app.use(cors);
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/files', fileRouter);

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