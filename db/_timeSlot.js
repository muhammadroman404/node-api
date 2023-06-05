const mongoose =  require('mongoose');
const _timeSlotSchema =  new mongoose.Schema({
    timeSlot:String,
});
const TimeSlotSchema = mongoose.model('timeSlot',_timeSlotSchema);
module.exports = TimeSlotSchema;