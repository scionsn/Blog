// this file is to check if the crud operations are working well with the database.
const articlecrud = require("../db/helpers/articledetailscrud");
const logindetailcrud = require("../db/helpers/logindetailscrud");
const usercrud = require("../db/helpers/userscrud");

async function insert() {
  try {
    var rec1 = await usercrud.add({
      name: "santa",
      email: "santa@gmail.com",
      age: 21,
    });
    var rec2 = await usercrud.add({
      name: "scion ",
      email: "scion@gmail.com",
      age: 22,
    });
    var rec3 = await logindetailcrud.add({
      username: "gagan ",
      pwd: "gagan"
    });
    var rec4 = await logindetailcrud.add({
      username: "scion ",
      pwd: "scion",
    });
    var rec5 = await articlecrud.add({
      name: "corona vaccine",
      content:
        "corona vaccine should be introduced really soon for the benefit of the world",
      date: "6.1.2021",
      tag: "corona",
    });
    usercrud.find();
    logindetailcrud.find();
    articlecrud.find();

    console.log("records added in db ", rec1, rec2, rec3, rec4, rec5);
    // console.log(rec3)
  } catch (e) {
    console.log("error in insertion ", e);
  }
}
insert();
