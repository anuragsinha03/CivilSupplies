const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	supplierId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Supplier",
		required: true,
	},
	orderDate: {
		type: Date,
		required: true,
		default: Date.now,
	},
	status: {
		type: String,
		required: true,
		enum: ["pending", "delivered", "cancelled"],
		default: "pending",
	},
	riceQty: {
		type: Number,
		required: true,
		min: 0,
		default: 0,
		max: 5,
	},
	oilQty: {
		type: Number,
		required: true,
		min: 0,
		default: 0,
		max: 2,
	},
	sugarQty: {
		type: Number,
		required: true,
		min: 0,
		default: 0,
		max: 2,
	},
	grainsQty: {
		type: Number,
		required: true,
		min: 0,
		default: 0,
		max: 2,
	},
	wheatQty: {
		type: Number,
		required: true,
		min: 0,
		default: 0,
		max: 5,
	},
	totalPrice: {
		type: Number,
		required: true,
		default: 0,
	},
});

module.exports = mongoose.model("Order", orderSchema);
