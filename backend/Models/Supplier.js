const mongoose = require("mongoose");
// Supplier Schema
const supplierSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		validate: {
			validator: function (v) {
				return /^\d{10}$/.test(v);
			},
			message: props => `${props.value} is not a valid phone number!`,
		},
	},
	inventoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Inventory",
	},
});

module.exports = mongoose.model("Supplier", supplierSchema);
