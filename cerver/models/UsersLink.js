const { Schema, model } = require("mongoose");

const schema = new Schema({
    from: {type: String, require: true},
    code: {type: String, require: true, unique: true},
    owner: {type:String, require: true},
    date: { type: Date, expires: '5m', default: Date.now }
});

module.exports = model('UsersLink', schema)