var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const sessionSchema = new Schema({
	user: { type: String },
  end: {type: Date},
  session: {
    radar: {type: String},
    date: {type: Date},
    description: {type: String}
  }
});

module.exports = mongoose.model('Session', sessionSchema);
