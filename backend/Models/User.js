const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
			min: 18,
		},
		gender: {
			type: String,
			required: true,
			enum: ["male", "female", "other"],
		},
		city: {
			type: String,
			required: true,
		},
		income: {
			type: Number,
			required: true,
			min: 0,
			max: 300000,
		},
		phone: {
			type: String,
			required: true,
			unique: true,
			validate: {
				validator: v => /^\d{10}$/.test(v),
				message: props => `${props.value} is not a valid phone number!`,
			},
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		supplierId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Supplier",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", userSchema);
