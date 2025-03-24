import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "",
    },
    genre: {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
})

const Movie = mongoose.model("Movie", movieSchema);