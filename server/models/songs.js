let mongoose = require('mongoose')
// create a  model
let songsModel = mongoose.Schema({

Name: String,
Artist: String,
Released: String,
Description: String
},

{

collection: "Songs"
}
);
module.exports = mongoose.model('Songs', songsModel);
