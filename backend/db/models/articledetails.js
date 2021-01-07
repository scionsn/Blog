const connection = require("../../utils/connection");
var schema = connection.Schema;
var articledetailschema = new schema({
    name: {
        required: true,
        type: String,
    },
    content: {
        required: true,
        type: String,
    },
    date: {
        required: true,
        type: String,
    },
    tag:{
        required: true,
        type: String
    }
});

const articlescollection = connection.model(
    "articledetail",
    articledetailschema
);
module.exports = articlescollection;