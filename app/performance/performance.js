var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var performanceSchema = new Schema({
    name: String,
    start_date: Date,
    end_date: Date,
    artists: [{
        id: Schema.Types.ObjectId,
        type: String,
        as: String,
        genre: String,
        with: [String],
        availability: [{
            start: Date,
            end: Date
        }],
        upcoming_events: [String]
    }]
});
module.exports = mongoose.model('Performance', performanceSchema);