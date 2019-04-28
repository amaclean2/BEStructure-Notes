const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    portId = process.env.PORT || 3000;

// const mongodb = require('mongodb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = app.listen(portId, () => {
    var port = server.address().port;
    console.log("App running on port ", port);
});

const services = [
  'user',
  'car'
]

app.use( (req, res, next) => {

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  	let
      url = req.originalUrl,
      urlTk = url && typeof(url) === 'string'
       ? url.split('/')
       : false
      	
    //How you want to handle optimization
    if (services.indexOf(urlTk[0]) > -1) {
      response.status(200).json(request.body);
    }
  
	next();
});

let defaultState = [];


/*
 GET /api
 
 Could be condense for better readability
*/


var success = (code, data) => {
  
}

var error = () => {
  
}



app.get('/api', (request, response) => {
    //response.status(200).json(defaultState);
    success.(defaultState) 
});

app.get('/api/:id', (request, response) => {
   //response.status(200).json(defaultState.find( item => item.id === id));
   success.(defaultState)
});


// xxx.api.js
// module.exports =  {
// 	get: (ctx, params, cb) => get(ctx, params, GetDataset),
// 	put: () => {},
// 	post: () => {},
// 	delete: () => {},
// 	another_api_i_wrote: {
// 		get: (ctx, params, cb) => get(ctx, params, GetVolumeData),
// 		put: (ctx, params, cb) => put(ctx, params, UpdateVolumeData),
// 	}
// }

user.use(function (req, res, next) {
  	
  
  
  
  // GET api/user
  // GET api/user/{id}
  //
  // PUT api/user
  //
  switch(route) {
      
      
  }
  
  
})

https://www.npmjs.com/package/express-http-context
// /dir/api/user/index.js
var get = (ctx, res, req) => {
  //handles all possible cases for user.get
}

var user = {
  get
}

// /api/index.js
app.use('user', user)
app.use('car', car)
...



app.post('/api', (request, response) => {
    defaultState = [
        ...defaultState,
        request.body
    ];
    response.status(200).json(request.body);
});

app.put('/api/:id', (request, response) => {
    defaultState = defaultState.filter( item => item.id !== request.params.id);
    defaultState = [
        ...defaultState,
        request.body
    ];
    response.status(200).json(request.body);
});

app.delete('/api/:id', (request, response) => {
    defaultState = defaultState.filter( item => item.id !== request.params.id);
    response.status(200).send("Item delted");
});


//Example of bad server code that can crash ungracefully
const express = require('express')
const app = express()
const port = 2222

app.get('/', (req, res) => {
	
  	//Hello World will never be reached
	null.toString();
	res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//Solution
const express = require('express')
const app = express()
const port = 2222

app.get('/', (req, res) => {
	try {
		null.toString()
		res.send('Hello World!')

	} catch(e) {
		console.log(`Gracefully caught error ${e}`)
		res.send('Horrible server crash avoided')
	}
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

