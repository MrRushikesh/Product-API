let express = require('express');
let app = express();
let port = 7447;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = "mongodb://localhost:27017";
let db;

app.get('/',(req,res) => {
    res.send("<h1>Compare Product API</h1>");
})



//http://localhost:7447/compare?pid1=1&pid2=3 

//db.item.find({ _id: { $in: [1,2] } }, { name: 1, price: 1, ratings: 1 })


app.get('/compare',(req,res) => {
    let pid1 = Number(req.query.pid1)
    let pid2 = Number(req.query.pid2)
    let query = {}
    if(pid1 && pid2){
        query = { _id: { $in: [pid1,pid2] } }, { name: 1, price: 1, ratings: 1 }
    }else{
        query = {}
    }
    db.collection('item').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result);
    })
})

// Connect with MOngoDB database -: 

MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,client) => {
    if(err) console.log('Error while connecting to the Database')
    db = client.db('product')
    app.listen(port,() => {
        console.log(`Server is running on ${port}`);
    })
})