const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
	displayName: String,
    linkedinID: String,
    emailAddress: String,
    headline: String,
    location: String,
    numConnections: Number,
    publicProfileUrl: String,
    positionTitle: String,
    positionSummary: String,
    token: {
    	select: false,
    	type: String
    }
});

module.exports = mongoose.model('User', User);