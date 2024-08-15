const express = require('express')
const app = express()//call express 
const port = 3000
app.get('/route-handler', function(req, res)  {
    //headers,body , query parameter
    //do machine learning model
    res.json({
        name:"Jatin",
        age:21,
        gender:"Male"
    })
  })
app.get('/', function(req, res)  {
  res.send('<b> Hello World! </b>')
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})
//192.168.1.6