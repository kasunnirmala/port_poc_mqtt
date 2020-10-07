const mongoose = require('mongoose');
var ObjectIdSchema = mongoose.Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

const RFIDDataSchema = new mongoose.Schema({
    _id: { type: ObjectIdSchema, default: function () { return new ObjectId() } },
    node_id: String,
    val:String,
    timestamp: Number,
    datetime: String,
    date: String,
    time:String,
    sessionStatus:Boolean
}, {
    timestamps: true
});


module.exports = mongoose.model('rfidData', RFIDDataSchema);
