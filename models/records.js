const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const recordSchema = new Schema({
    record: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
})

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;