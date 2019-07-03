var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const SightingSchema = new Schema({
    animalType: String,
    location: {
        type: {
          type: String, 
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    },
    datetime: Date,
    status: String,
    dangerous: Boolean,
    isMissing: Boolean,
    isWild: Boolean,
    imageUrl: String,
    comment: String,

    comments: [
        {
          type: Schema.Types.ObjectId,
          ref: "comments"
        }
      ]
    

  });

const Sighting = mongoose.model("Sighting", SightingSchema);

// Export the User model
module.exports = Sighting;