const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpSchema = new Schema({

    title : {
        type: String,
        required: true
    },

    employer: {
        type: String,
        required: true
    },


});

const Exp = mongoose.model("Exp", ExpSchema);

export default ExpSchema;