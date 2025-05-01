import mongoose from "mongoose";

const petSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        breed: {
            type: String
        },
        age: {
            type: Number
        },
        imageUrl: {
            type: String, // stores the path like "uploads/xyz.jpg"
        },
    },
    {
        timestamps: true,
    }
)

export const Pet = mongoose.model('Pet', petSchema);