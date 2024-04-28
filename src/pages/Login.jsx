import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation after login

function Login() {
	const [credentials, setCredentials] = useState({
		phone: "",
		password: "",
	});

	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleInputChange = e => {
		const { name, value } = e.target;
		setCredentials(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:5000/v1/api/login",
				credentials
			);

			if (response.status === 200) {
				console.log("Login successful:", response.data);

				// Example: Store token in localStorage for later use
				localStorage.setItem("authToken", response.data.token);

				// Redirect to a different page after login (e.g., dashboard)
				navigate("/dashboard");
			} else {
				// Handle unexpected response statuses
				console.log("Login failed:", response.data);
			}
		} catch (error) {
			console.error("Error during login:", error);

			// Display a user-friendly error message
			setError("Invalid phone or password. Please try again.");
		}
	};

	return (
		<main>
			<Navbar />
			<section className='backgroundImg h-[100vh] flex flex-col justify-center items-center '>
				<p className='text-3xl font-bold mb-[10px] text-white'>
					Login existing user
				</p>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col gap-[1rem] border-[1px] bg-white border-black  rounded-lg md:px-[4rem] px-[2rem] py-[2rem]'>
					{/* Phone input */}
					<div className='flex justify-between gap-[3.2rem]'>
						<label
							htmlFor='phone'
							className='font-bold'>
							Phone
						</label>
						<input
							type='text'
							name='phone'
							required
							value={credentials.phone}
							onChange={handleInputChange}
							className='border-[1px] border-black px-[5px] rounded-lg'
						/>
					</div>

					{/* Password input */}
					<div className='flex justify-between gap-[2rem]'>
						<label
							htmlFor='password'
							className='font-bold'>
							Password
						</label>
						<input
							type='password'
							name='password'
							required
							value={credentials.password}
							onChange={handleInputChange}
							className='border-[1px] border-black px-[5px]  rounded-lg'
						/>
					</div>

					{/* Display error message if login fails */}
					{error && <div className='text-red-500'>{error}</div>}

					{/* Login button */}
					<button
						type='submit'
						className='border-[1px] h-[40px] font-bold border-black md:py-[5px] hover:bg-[#363636] hover:text-white'>
						LOGIN
					</button>
				</form>
			</section>
		</main>
	);
}

export default Login;
