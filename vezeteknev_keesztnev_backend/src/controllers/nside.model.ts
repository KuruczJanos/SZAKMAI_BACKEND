import { Schema, SchemaDefinition, model } from "mongoose";

const nsideSchema = new Schema<SchemaDefinition>(
    {
        _id: Number,
        kategoria: {
            ref: "oneside",
            type: Number,
            required: [true, "Hiányos adatok!"],
        },
        leiras: {
            type: String,
        },
        hirdetesDatuma: {
            type: Date,
            default: new Date(),
        },
        tehermentes: {
            type: Boolean,
            required: [true, "Hiányos adatok!"],
        },
        ar: {
            type: Number,
            required: [true, "Hiányos adatok!"],
        },
        kepUrl: {
            type: String,
        },
    },
    { versionKey: false, id: false, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

const nsideModel = model("nside", nsideSchema, "ingatlanok");

export default nsideModel;
