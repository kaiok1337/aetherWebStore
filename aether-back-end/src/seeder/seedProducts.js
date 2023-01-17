const Product = require("../products/schemas/product.schema.ts");
const mongoose = require("mongoose");
const dev = require("../config/dev"); //get your mongoose string
//create your array. i inserted only 1 object here
const products = [   
  new Product({
    name: 'Aether Hat',
    price: 20,
    type: 'hat'
  }),]
//connect mongoose
mongoose
  .connect(String(dev.db), { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
  });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
products.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === products.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});