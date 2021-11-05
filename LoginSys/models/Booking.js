const mongoose = require("mongoose");

const slot = require("./TimeSlot");

const Schema = mongoose.Schema,
  ObjectId = mongoose.Schema.Types.ObjectId;

const bookingSchema = new Schema({
  id: BookingId,
  name: String,
  email: String,
  phone: Number,
  slot: { type: ObjectId, ref: slot },
  created_at: Date,
  item1: Main1,
  
  item2:Main2,
  
  item3: Main3,
  
  item4: Main4,
  
  item5: Entree1,
  item6: Entree2,
  item7: Entree3,
  item8: Entree4,
  item9: Drink1,
  item10: Drink2,
  item11: Drink3,
  item12: Drink4,
  item13: Dessert1,
  item14: Dessert2,
  item15: Dessert3,
  item15: Dessert4,
  
  
  
  
  
  
});

module.exports = Booking = mongoose.model("booking", bookingSchema);
