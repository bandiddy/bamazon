var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  afterConnection()
});

function afterConnection() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("------------------------------------------")
    console.log("Welcome to BAMAZON. Here is our list of amazing items")
    console.log(JSON.stringify(res, null, 2));
    console.log("------------------------------------------")
    start()
  });
}
function start() {
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the ID of the item you'd like to purchase?"
      },
      {
        name: "category",
        type: "input",
        message: "How many units of the product they would like to buy?"
      }

    ])

    .then(function (answer) {
      id = answer.item;
      amount = answer.category;

      console.log(answer.item)
      console.log(answer.category)
      buyItem(id, amount)
    })
}

var id;
var amount;

function buyItem() {
  connection.query(
    "SELECT * FROM products WHERE ?",
    [
      {
        id: id
      }
    ],
    function (err, res) {
      if (err) throw err;
      if (res[0].stock_quantity < amount) {
        console.log("INSUFFICENT QUANTITY");
        return;
      }
      console.log("Updating quantities...\n");
      var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: res[0].stock_quantity - amount
          },
          {
            id: id
          }
        ],
      )
      update()
    })
}
function update() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
  console.log("------------------------------------------")
      console.log("New Updated Bamazon list of items")
      console.log(JSON.stringify(res, null, 2));
      console.log("------------------------------------------")
      connection.end()
})
}

