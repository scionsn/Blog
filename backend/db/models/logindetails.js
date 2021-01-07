const connection = require("../../utils/connection");
var schema = connection.Schema;
var logindetailschema = new schema({
  username: { required: true, type: String },
  pwd: { required: true, type: String },
});

const logindetailscollection = connection.model(
  "logindetails",
  logindetailschema
);
module.exports = logindetailscollection;
