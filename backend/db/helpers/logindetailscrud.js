const logindetailscollection = require("../models/logindetails");
const logindetailsoperations = {
  add(record) {
    var promise = logindetailscollection.create(record);
    return promise;
  },
  find() {
    var pr = logindetailscollection.find();
    return pr;
  },
  findone(record) {
    var pr = logindetailscollection.findOne(record);
    return pr;
  },
  update(record) {
    console.log(record);

    var pr = logindetailscollection.findOneAndUpdate(record);
    // var rec=new exercisecollection(record)
    // var pr=rec.save();
    return pr;
  },
  delete(id) {
    var pr = logindetailscollection.findByIdAndDelete(id);
    return pr;
  },
  findbyid(id) {
    var pr = logindetailscollection.findById(id);
    return pr;
  },
};
module.exports = logindetailsoperations;
