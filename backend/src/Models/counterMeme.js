"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CounterMemeSchema = Schema({
    contador: Number,
});
var CounterMeme = mongoose.model("counter_meme", CounterMemeSchema);

module.exports = CounterMeme;