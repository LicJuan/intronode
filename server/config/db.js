const mongoose = require('mongoose')
module.exports = mongoose.connect(
    "mongodb+srv://intro-master:JRDG05180913@intronode-7sskn.mongodb.net/intronode?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);