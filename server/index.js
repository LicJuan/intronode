const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')
const meals = require("./routes/meals");
const orders = require("./routes/orders");
const app = express();
let port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());

mongoose.connect(
    "mongodb+srv://intro-master:JRDG05180913@intronode-7sskn.mongodb.net/intronode?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use("/meals", meals);
app.use("/orders", orders);

app.listen(port, () => {
    console.log(`Servidor montado en el puerto ${port}`);
});