
const mongoose = require("mongoose");

mongoose.connect(`mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {useNewUrlParser: true, useUnifiedTopology: true},
);


exports.movie = mongoose.model(
    "Person",
    {
        id: {
            type: Number,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        year: {
            type: Number
        },

        director: {
            type: String
        }
    }
);