const express = require("express");
const User = require("./../Models/User");
const Supplier = require("./../Models/Supplier");
const Inventory = require("./../Models/Inventory");
const Order = require("./../Models/Order");
const authenticateToken = require("./../middlewares/authenticateToken");

const router = express.Router();

//show dashboard with all items to be bought
router.get("/", async (req, res) => {
	try {
		const userId = req.user.userId;

		const user = await User.findById(userId);
		if (!user) {
			return res.status(404).send({ error: "User not found" });
		}

		const supplierId = user.supplierId;
		if (!supplierId) {
			return res.status(404).send({ error: "Supplier not found" });
		}

		const supplier = await Supplier.findById(supplierId);
		if (!supplier) {
			return res.status(404).send({ error: "Supplier not found" });
		}

		const inventoryId = supplier.inventoryId;
		if (!inventoryId) {
			return res.status(404).send({ error: "Inventory not found" });
		}

		const inventory = await Inventory.findById(inventoryId)
			.lean()
			.select("-_id");

		res.status(200).json(inventory);
	} catch (err) {
		console.error("Error fetching inventory:", err);
		res.status(500).send({ error: "Internal Server Error" });
	}
});

router.post("/placeOrder", authenticateToken, async (req, res) => {
	try {
		const userId = req.user.userId;

		// Check user existence
		const user = await User.findById(userId);
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		const supplierId = user.supplierId;

		if (!supplierId) {
			return res
				.status(400)
				.json({ error: "User has no supplier assigned" });
		}

		const supplier = await Supplier.findById(supplierId);
		if (!supplier) {
			return res.status(404).json({ error: "Supplier not found" });
		}

		const inventoryId = supplier.inventoryId;

		const { riceQty, oilQty, sugarQty, grainsQty, wheatQty } = req.body;

		const quantities = { riceQty, oilQty, sugarQty, grainsQty, wheatQty };

		for (const [key, value] of Object.entries(quantities)) {
			if (typeof value !== "number" || value < 0) {
				return res
					.status(400)
					.json({ error: `${key} must be a non-negative number` });
			}
		}

		const totalPrice = riceQty + oilQty + sugarQty + grainsQty + wheatQty;

		const newOrder = new Order({
			userId,
			supplierId,
			orderDate: new Date(),
			status: "pending",
			riceQty,
			oilQty,
			sugarQty,
			grainsQty,
			wheatQty,
			totalPrice,
		});

		await newOrder.save();

		// Update inventory immediately after placing an order
		await Inventory.findByIdAndUpdate(
			inventoryId,
			{
				$inc: {
					riceQty: -riceQty,
					oilQty: -oilQty,
					sugarQty: -sugarQty,
					grainsQty: -grainsQty,
					wheatQty: -wheatQty,
				},
			},
			{ new: true }
		);

		console.log("Inventory updated after placing order");

		res.status(201).json({
			message: "Order placed successfully",
			order: newOrder,
		});

		// Set a delay to simulate delivery time
		setTimeout(async () => {
			try {
				const order = await Order.findById(newOrder._id);

				// If order is still pending, update to delivered
				if (order.status === "pending") {
					await Order.findByIdAndUpdate(newOrder._id, {
						status: "delivered",
					});

					console.log("Order status updated to delivered");
				} else {
					console.log(
						"Order status was not 'pending', so not updated to 'delivered'"
					);
				}
			} catch (error) {
				console.error("Error updating order status:", error);
			}
		}, 60000); // 1-minute delay
	} catch (err) {
		console.error("Error placing the order:", err);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

router.delete("/deleteOrder/:orderId", authenticateToken, async (req, res) => {
	try {
		const orderId = req.params.orderId;

		const order = await Order.findById(orderId);

		if (!order) {
			return res.status(404).json({ error: "Order not found" });
		}

		if (order.status !== "pending") {
			return res.status(400).json({
				error: "Order cannot be cancelled; it's already delivered or has a different status",
			});
		}

		const { riceQty, oilQty, sugarQty, grainsQty, wheatQty } = order;

		// Change order status to 'cancelled'
		await Order.findByIdAndUpdate(orderId, { status: "cancelled" });

		const supplier = await Supplier.findById(order.supplierId);
		const inventoryId = supplier.inventoryId;

		// Re-update inventory after cancellation
		await Inventory.findByIdAndUpdate(
			inventoryId,
			{
				$inc: {
					riceQty,
					oilQty,
					sugarQty,
					grainsQty,
					wheatQty,
				},
			},
			{ new: true }
		);

		console.log("Order cancelled and inventory restored");

		res.status(200).json({
			success: true,
			message: `Order ${orderId} has been cancelled and inventory restored`,
		});
	} catch (error) {
		console.error("Error cancelling order:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Show all past orders for a user
router.get("/past-orders", authenticateToken, async (req, res) => {
	try {
		const userId = req.user.userId; // Ensure the user is authenticated

		const orders = await Order.find({ userId })
			.lean()
			.sort({ orderDate: -1 }); // Sort by most recent

		res.status(200).json(orders); // Return the orders
	} catch (err) {
		console.error("Error fetching past orders:", err);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = router;
