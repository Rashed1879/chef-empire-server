const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const allChef = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
	res.send('Server is Running');
});

app.get('/allChef', (req, res) => {
	res.send(allChef);
});

app.listen(port, () => {
	console.log(`Server is running on port : ${port}`);
});
