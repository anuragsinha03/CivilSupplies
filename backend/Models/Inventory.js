const mongoose = require("mongoose");

// Inventory Schema
const inventorySchema = new mongoose.Schema({
	riceQty: {
		type: Number,
		min: 0,
		default: 0,
	},
	oilQty: {
		type: Number,
		min: 0,
		default: 0,
	},
	sugarQty: {
		type: Number,
		min: 0,
		default: 0,
	},
	grainsQty: {
		type: Number,
		min: 0,
		default: 0,
	},
	wheatQty: {
		type: Number,
		min: 0,
		default: 0,
	},
});

module.exports = mongoose.model("Inventory", inventorySchema);
