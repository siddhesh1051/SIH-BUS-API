const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
    buses: {
    type: Array,
    default: [],


    },
    name: {
        type: String,
        required: true,
        unique: true,
    },

});

module.exports = mongoose.model("city", citySchema);
