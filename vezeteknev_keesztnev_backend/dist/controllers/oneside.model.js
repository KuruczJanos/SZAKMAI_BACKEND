"use strict";
// https://mongoosejs.com/docs/validation.html#built-in-validators
// https://transform.tools/json-to-mongoose
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const onesideSchema = new mongoose_1.Schema({
    _id: Number,
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
}, 
// Virtuals are not included in string version of the model instances by default.
// To include them, set the virtuals option to true on schema’s toObject and toJSON options.
{ versionKey: false, id: false, toJSON: { virtuals: true }, toObject: { virtuals: true } });
// Mongoose also supports populating virtuals.
// Help: https://mongoosejs.com/docs/tutorials/virtuals.html#populate
// You can give the "virtualPop" any name you want:
// onesideSchema.virtual("virtualPop", {
//     ref: "nside",
//     localField: "_id",
//     foreignField: "FK_neve", // ref_Field
//     justOne: false,
// });
// Use virtual for populate in oneSide controller:
// const data = await this.onesideM.find().populate("populateFieldOneSide", "-_id field1 field2 -field3 ...");
const onesideModel = (0, mongoose_1.model)("oneside", onesideSchema, "TáblaNeve1");
exports.default = onesideModel;
//# sourceMappingURL=oneside.model.js.map