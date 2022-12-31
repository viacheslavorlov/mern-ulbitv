const router = require('./routes/auth.routes')
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
const PORT = config.get('serverPort');

app.use(express.json());
app.use('/api/auth', router);

//* from site MongoDB
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://viacheslavorlov:<password>@cloud.gx6tqfa.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
// 	const collection = client.db("test").collection("devices");
// 	// perform actions on the collection object
// 	client.close();
// });

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