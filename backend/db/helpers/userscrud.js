const userscollection = require("../models/users");
const useroperations = {
  add(record) {
    var promise = userscollection.create(record);
    return promise;
  },
  find() {
    var pr = userscollection.find();
    return pr;
  },
  findone(record) {
    var pr = userscollection.findOne(record);
    return pr;
  },
  update(record) {
    console.log(record);

    var pr = userscollection.findOneAndUpdate(record);
    // var rec=new exercisecollection(record)
    // var pr=rec.save();
    return pr;
  },
  delete(id) {
    var pr = userscollection.findByIdAndDelete(id);
    return pr;
  },
  findbyid(id) {
    var pr = userscollection.findById(id);
    return pr;
  },
};
module.exports = useroperations;
