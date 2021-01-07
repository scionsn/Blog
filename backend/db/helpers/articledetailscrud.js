const articledetailscollection=require("../models/articledetails")
const articledetailsoperations={
    add(record){
var promise=articledetailscollection.create(record);
return promise;
    },
    find(){
        var pr=articledetailscollection.find();
        return pr;
    },
    findone(record){
        var pr=articledetailscollection.findOne(record);
        return pr;
    },
    update(record){
        console.log(record)
       
       var pr= articledetailscollection.findOneAndUpdate(record)
        // var rec=new exercisecollection(record)
        // var pr=rec.save();
        return pr;
    },
    delete(id){
        var pr=articledetailscollection.findByIdAndDelete(id)
        return pr;
    },
    findbyid(id){
        var pr=articledetailscollection.findById(id)
        return pr;
    }
}
module.exports=articledetailsoperations