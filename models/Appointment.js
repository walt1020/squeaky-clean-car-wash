var mongoose = require('mongoose');
var Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0) {
  mongoose.connect(require('./connection-string'));
}


var newSchema = new Schema({
  
  'location': { type: String },
  'time': { type: Date },
   'car': {
    make: {type: String},
    model: {type: String},
    color: {type: String},
    year_made: {type: String},
    license_plate: {type: String}
  },
  'special_instructions': { type: String },
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now }
});

newSchema.pre('save', function(next){
  this.updatedAt = Date.now();
  next();
});

newSchema.pre('update', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

newSchema.pre('findOneAndUpdate', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});



module.exports = mongoose.model('Appointment', newSchema);
