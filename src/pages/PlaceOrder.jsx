import { useState } from "react";
import axios from "axios";
import Navbar from "./../components/Navbar";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
	const [formData, setFormData] = useState({
		riceQty: 2, // Default value for rice
		oilQty: 2, // Default value for oil
		sugarQty: 2, // Default value for sugar
		grainsQty: 2, // Default value for grains
		wheatQty: 2, // Default value for wheat
	});

	const navigate = useNavigate();

	const handleInputChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: parseInt(value, 10) }));
	};

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const authToken = localStorage.getItem("authToken");
			const response = await axios.post(
				"http://localhost:5000/v1/api/dashboard/placeOrder",
				formData,
				{
					headers: {
						Authorization: `Bearer ${authToken}`,
					},
				}
			);

			if (response.status === 201) {
				const totalQuantity = Object.values(formData).reduce(
					(acc, val) => acc + val,
					0
				);

				// Navigate to the order confirmation page with state
				navigate("/orderConfirmation", {
					state: {
						totalQuantity, // Pass the total quantity
						orderId: response.data.order._id, // Pass the order ID
					},
				});
			} else {
				console.log("Failed to place order");
			}
		} catch (error) {
			console.error("Error placing order:", error);
		}
	};

	return (
		<main>
			<Navbar />
			<section className='flex flex-col justify-center items-center mt-[3rem]'>
				<h2 className='text-3xl font-bold'>Place Your Order</h2>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col gap-[1rem] mt-[2rem] border-[1px] border-black px-[2rem] py-[2rem]'>
					<div className='flex justify-between gap-[3.2rem]'>
						<label htmlFor='riceQty'>Rice Quantity</label>
						<input
							type='number'
							name='riceQty'
							id='riceQty'
							value={formData.riceQty}
							onChange={handleInputChange}
							className='border-[1px] border-black px-[5px]'
							max={5}
							required
						/>
					</div>

					<div className='flex justify-between gap-[3.2rem]'>
						<label htmlFor='oilQty'>Oil Quantity</label>
						<input
							type='number'
							name='oilQty'
							id='oilQty'
							value={formData.oilQty}
							onChange={handleInputChange}
							className='border-[1px] border-black px-[5px]'
							max={2}
							required
						/>
					</div>

					<div className='flex justify-between gap-[3.2rem]'>
						<label htmlFor='sugarQty'>Sugar Quantity</label>
						<input
							type='number'
							name='sugarQty'
							id='sugarQty'
							value={formData.sugarQty}
							onChange={handleInputChange}
							className='border-[1px] border-black px-[5px]'
							max={2}
							required
						/>
					</div>

					<div className='flex justify-between gap-[3.2rem]'>
						<label htmlFor='grainsQty'>Grains Quantity</label>
						<input
							type='number'
							name='grainsQty'
							id='grainsQty'
							value={formData.grainsQty}
							onChange={handleInputChange}
							className='border-[1px] border-black px-[5px]'
							max={2}
							required
						/>
					</div>

					<div className='flex justify-between gap-[3.2rem]'>
						<label htmlFor='wheatQty'>Wheat Quantity</label>
						<input
							type='number'
							name='wheatQty'
							id='wheatQty'
							value={formData.wheatQty}
							onChange={handleInputChange}
							className='border-[1px] border-black px-[5px]'
							max={5}
							required
						/>
					</div>

					<button
						type='submit'
						className='bg-gray-800 text-white font-bold px-[20px] py-[10px]'>
						Place Order
					</button>
				</form>
			</section>
		</main>
	);
}

export default PlaceOrder;
