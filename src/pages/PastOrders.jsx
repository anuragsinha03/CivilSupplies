import { useEffect, useState } from "react";
import Navbar from "./../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns"; // For date formatting

function PastOrders() {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPastOrders = async () => {
			try {
				const authToken = localStorage.getItem("authToken");

				const response = await axios.get(
					"http://localhost:5000/v1/api/dashboard/past-orders",
					{
						headers: {
							Authorization: `Bearer ${authToken}`,
						},
					}
				);

				if (response.status === 200) {
					setOrders(response.data);
				} else {
					setError("Failed to fetch past orders");
				}
			} catch (err) {
				console.error("Error fetching past orders:", err);
				setError("Internal Server Error");
			} finally {
				setLoading(false);
			}
		};

		fetchPastOrders();
	}, []); // Run only once when the component is mounted

	if (error) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<Navbar />
				<p>{error}</p>
			</div>
		);
	}

	return (
		<main>
			<Navbar />
			<section className='p-6'>
				<h2 className='text-2xl font-bold mb-4'>Past Orders</h2>
				{orders.length === 0 ? (
					<p>No past orders found</p>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{orders.map(order => (
							<div
								key={order._id}
								className='bg-white shadow-md p-4 rounded-lg'>
								<h3 className='font-bold'>
									Order ID: {order._id}
								</h3>
								<p>Status: {order.status}</p>
								<p>
									Date:{" "}
									{format(
										new Date(order.orderDate),
										"MM/dd/yyyy"
									)}
								</p>
								<p>
									Total Quantity:{" "}
									{order.riceQty +
										order.oilQty +
										order.sugarQty +
										order.grainsQty +
										order.wheatQty}
								</p>
							</div>
						))}
					</div>
				)}
			</section>
		</main>
	);
}

export default PastOrders;
