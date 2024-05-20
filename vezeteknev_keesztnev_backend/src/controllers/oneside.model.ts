import { Schema, SchemaDefinition, model } from "mongoose";

const onesideSchema = new Schema<SchemaDefinition>(
    {
        _id: Number, //Ez kötelező MongoDb-ben! Alul vonással az id!
        nev: {
            type: String,
            required: true,
            unique: true,
        },
    },

    { versionKey: false, id: false, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

const onesideModel = model("oneside", onesideSchema, "kategoriak");

export default onesideModel;
