import { useState } from "react";
import Navbar from "./../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CancelOrder() {
	const [orderId, setOrderId] = useState("");
	const [error, setError] = useState(null);
	const [successMessage, setSuccessMessage] = useState(null);
	const navigate = useNavigate();

	const handleInputChange = e => {
		setOrderId(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const authToken = localStorage.getItem("authToken"); // Retrieve token from localStorage

			const response = await axios.delete(
				`http://localhost:5000/v1/api/dashboard/deleteOrder/${orderId}`, // DELETE request with order ID
				{
					headers: {
						Authorization: `Bearer ${authToken}`, // Ensure authorization
					},
				}
			);

			if (response.status === 200) {
				// If the request is successful
				setSuccessMessage(response.data.message); // Display success message
				setError(null); // Clear previous errors
				setOrderId(""); // Reset input field

				setTimeout(() => {
					navigate("/dashboard"); // Navigate back to the dashboard after a delay
				}, 2000); // Navigate after 2 seconds to give time to view success message
			} else {
				setError("Failed to cancel order");
			}
		} catch (error) {
			setError(error.response?.data?.error || "Error cancelling order");
			setSuccessMessage(null); // Clear success message on error
		}
	};

	return (
		<main>
			<Navbar />
			<section className='flex flex-col justify-center items-center mt-[3rem]'>
				<h2 className='text-3xl font-bold'>Cancel Order</h2>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col gap-[1rem] mt-[2rem] border-[1px] border-black px-[2rem] py-[2rem]'>
					<label htmlFor='orderId'>Enter Order ID to Cancel</label>
					<input
						type='text'
						name='orderId'
						id='orderId'
						value={orderId}
						onChange={handleInputChange}
						className='border-[1px] border-black px-[5px]'
						required
					/>
					<button
						type='submit'
						className='bg-gray-800 text-white font-bold px-[20px] py-[10px]'>
						Cancel Order
					</button>
				</form>
				{successMessage && (
					<p className='text-green-600'>{successMessage}</p> // Display success message
				)}
				{error && <p className='text-red-600'>{error}</p>}
			</section>
		</main>
	);
}

export default CancelOrder;
