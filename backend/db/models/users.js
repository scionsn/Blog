const connection=require("../../utils/connection")
var schema=connection.Schema;
var userschema=new schema({
name:{required:true,type:String},
email:{required:true,type:String},
age:{required:true,type:Number}
})

const userscollection=connection.model("users",userschema)
module.exports=userscollection