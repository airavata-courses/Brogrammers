var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const sessionSchema = new Schema({
	user: { type: String },
  end: {
		type: Date,
		default: Date.now(),
		index: {expires: '2d'}
	},
  data: {
    category: {type: String},
    date: {type: Date},
    description: {type: String}
  }
});

module.exports = mongoose.model('Session', sessionSchema);
