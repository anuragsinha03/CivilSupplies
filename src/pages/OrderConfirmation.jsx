import Navbar from "./../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

function OrderConfirmation() {
	const navigate = useNavigate();
	const location = useLocation();

	const { totalQuantity, orderId } = location.state; // Get passed state from PlaceOrder

	const handleBackToDashboard = () => {
		navigate("/dashboard"); // Navigate back to the dashboard
	};

	return (
		<main>
			<Navbar />
			<section className='flex flex-col gap-[10px] justify-center items-center mt-[3rem]'>
				<h2 className='text-3xl font-bold'>Order Confirmation</h2>
				<p>Your order (ID: {orderId}) has been successfully placed.</p>
				<p>Total Payable Amount: {totalQuantity}</p>
				<button
					onClick={handleBackToDashboard}
					className='bg-gray-800 text-white font-bold px-[20px] py-[10px]'>
					Back to Dashboard
				</button>
			</section>
		</main>
	);
}

export default OrderConfirmation;
