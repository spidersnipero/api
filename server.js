const ex = require("express")
const api = ex();
const port  = 3000
const bP = require("body-parser");
// to createa router to allocate paths for evrey get request
const uroutes = require("./router.js");
//to use json application

const users =[
    {
        name:"aj",
        age:19
    }
]
//used to send for route
api.get('/',uroutes);
api.post('/',(req,res)=>{
    console.log(req.body);
    res.sendFile(__dirname+"/sent.html");
})


//use to listen at port
api.listen(port,()=>{
    console.log(`PORT IS RUNNING AT ${port}`);
})