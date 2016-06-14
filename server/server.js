const        express = require("express");
const app = express()

var cors = require('cors')

app.use(cors())

app.use(express.static('../client'))

app.listen(3000, function(){
	console.log('listening on 3000')
})


