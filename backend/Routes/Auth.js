const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./../Models/User");
const authenticateToken = require("./../middlewares/authenticateToken");
const router = express.Router();
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/register", async (req, res) => {
	try {
		const { name, age, gender, city, income, phone, password } = req.body;

		if (!name || !age || !gender || !city || !phone || !password) {
			return res.status(400).send({ error: "Missing required fields" });
		}

		if (income > 300000) {
			return res.status(400).send({
				error: "You cannot avail this facility because your annual income is more than 300000",
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const suppliers = [
			"662cd3f2d5bdb2eeb640b811",
			"662cd49cd5bdb2eeb640b812",
			"662cda7fceaf06b4125f9baa",
		];

		function getRandomSupplierId(arr) {
			const randomIndex = Math.floor(Math.random() * arr.length);
			return arr[randomIndex];
		}

		const supplierId = getRandomSupplierId(suppliers);

		const newUser = new User({
			name,
			age,
			gender,
			city,
			income,
			phone,
			password: hashedPassword,
			supplierId,
		});

		await newUser.save();

		// Generate a JWT token for the new user
		const token = jwt.sign(
			{ userId: newUser._id },
			process.env.JWT_SECRET,
			{
				expiresIn: "1h",
			}
		);

		res.status(201).send({ newUser, token });
	} catch (err) {
		console.error("Error during registration:", err);
		res.status(500).send({ error: "Internal Server Error" });
	}
});

router.post("/login", async (req, res) => {
	try {
		const { phone, password } = req.body;

		if (!phone || !password) {
			return res
				.status(400)
				.send({ error: "Missing phone number or password" });
		}

		const user = await User.findOne({ phone });

		if (!user) {
			return res
				.status(401)
				.send({ error: "Invalid phone number or password" });
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!isPasswordCorrect) {
			return res
				.status(401)
				.send({ error: "Invalid phone number or password" });
		}

		// Generate a JWT token upon successful login
		const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
			expiresIn: "1h",
		});

		res.status(200).send({ message: "Login successful", token }); // Return the token to the client
	} catch (err) {
		console.error("Error during login:", err);
		res.status(500).send({ error: "Internal Server Error" });
	}
});

router.post("/logout", (req, res) => {
	res.status(200).send({ message: "Logged out successfully" });
});

module.exports = router;
