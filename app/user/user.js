var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    events: [{ type: Schema.Types.ObjectId, ref: 'Performance' }],
    zip: Number,
    cell: String
});
module.exports = mongoose.model('User', userSchema);
