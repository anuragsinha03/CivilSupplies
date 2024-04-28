import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./../components/Navbar";
import DashboardCard from "./../components/DashboardCard";
import rice from "./../assets/rice.jpg";
import oil from "./../assets/oil.jpg";
import sugar from "./../assets/sugar.jpg";
import grains from "./../assets/grains.jpg";
import wheat from "./../assets/wheat.png";
import { Link } from "react-router-dom";

// Mapping of item names to images
const imageMap = {
	riceQty: rice,
	oilQty: oil,
	sugarQty: sugar,
	grainsQty: grains,
	wheatQty: wheat,
};

function Dashboard() {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			const authToken = localStorage.getItem("authToken");

			if (!authToken) {
				setError("Authorization token not found");
				setLoading(false);
				return;
			}

			try {
				const response = await axios.get(
					"http://localhost:5000/v1/api/dashboard",
					{
						headers: {
							Authorization: `Bearer ${authToken}`,
						},
					}
				);

				if (response.status === 200) {
					setData(response.data);
				} else {
					setError("Failed to fetch data");
				}
			} catch (err) {
				setError("An error occurred while fetching data");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("authToken"); // Clear JWT token
		navigate("/login"); // Redirect to login
	};

	if (loading) {
		return (
			<div className='flex flex-col justify-center items-center h-screen'>
				<Navbar />
				<p>Loading...</p>
			</div>
		);
	}

	if (error) {
		navigate("/login");
		return (
			<div className='flex flex-col justify-center items-center h-screen'>
				<div>{error}</div>
				<Link to='/login'>Go to Login</Link>
			</div>
		);
	}

	return (
		<main>
			<Navbar />
			<section className='mt-[3rem] flex flex-col justify-center items-center'>
				<h2 className='text-3xl font-bold'>
					Welcome to the Public Supplies Corporation PORTAL
				</h2>
				<div className='flex flex-wrap justify-center gap-6 mt-6'>
					{Object.entries(data).map(([key, value], index) => (
						<DashboardCard
							key={index}
							itemName={key}
							quantity={value}
							imageSrc={imageMap[key]}
						/>
					))}
				</div>

				<div className='flex gap-[2rem] mt-[4rem]'>
					<button
						className='bg-gray-800 text-white font-bold px-[20px] py-[10px]'
						onClick={() => navigate("/placeOrder")}>
						Place Order
					</button>
					<button
						className='bg-gray-800 text-white font-bold px-[20px] py-[10px]'
						onClick={() => navigate("/cancelOrder")}>
						Cancel Order
					</button>
					<button
						className='bg-gray-800 text-white font-bold px-[20px] py-[10px]'
						onClick={() => navigate("/pastOrders")}>
						Show Past Orders
					</button>
					<button
						className='bg-gray-800 text-white font-bold px-[20px] py-[10px]'
						onClick={handleLogout} // Logout handler
					>
						Logout
					</button>
				</div>
			</section>
		</main>
	);
}

export default Dashboard;
