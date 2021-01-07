const mongoose=require("mongoose");
const config=require("./config");
mongoose.connect(config.url,{poolSize:config.poolsize},err=>{
    if(err){
        console.log("ERROR-- ",err)
    }
    else{
        console.log("CONNECTION SUCCESS!!");
    }
})
module.exports=mongoose;