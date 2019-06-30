var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    sightings: [
        {
          type: Schema.Types.ObjectId,
          ref: "sightings"
        }
      ]
    });

const User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;