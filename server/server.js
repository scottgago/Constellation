const        express = require("express");
const app = express()

var cors = require('cors')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.use(express.static('../client'))

app.get('*', function(req,res){
	// res.redirect('/mainview')
	res.end()
})

app.listen(3000, function(){
	console.log('listening on 3000')
})


