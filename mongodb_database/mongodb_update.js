const {MongoClient,ObjectId}=require("mongodb");
MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
    if(err){
        return console.log("not connected");
    }
    else
    {
        console.log("connected");
    }
    db.collection("user").findOneAndUpdate({
            name:"mohini"
    },{
        $set:{
            name:"mohini1"
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log("result");
    });

    db.collection("user").deleteMany({name:"mohini"}).then((result)=>{
        console.log(result)
    })
    db.close();
});