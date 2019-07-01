var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const CommentsSchema = new Schema({
        sightingId: Schema.Types.ObjectId,
        posted: Date,
        author: Schema.Types.ObjectId,
        text: String
    });

const Comments = mongoose.model("Comments", CommentsSchema);

// Export the User model
module.exports = Comments;