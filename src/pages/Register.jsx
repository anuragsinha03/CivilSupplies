import { useState } from "react";
import Navbar from "./../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
	const [formData, setFormData] = useState({
		name: "",
		age: "",
		gender: "",
		city: "",
		income: "",
		phone: "",
		password: "",
	});

	const navigate = useNavigate();

	// Event handler for input changes
	const handleInputChange = e => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));
	};

	// Event handler for form submission
	const handleSubmit = async e => {
		e.preventDefault(); // Prevent default form submission behavior

		try {
			// Make POST request to the registration endpoint
			const response = await axios.post(
				"http://localhost:5000/v1/api/register",
				formData
			);

			if (response.status === 201) {
				// Success handling (e.g., redirect, message)
				console.log("User registered successfully:", response.data);
				navigate("/login");
			} else {
				// Handle other responses
				console.log("Registration failed:", response.data);
			}
		} catch (error) {
			console.error("Error during registration:", error);
		}
	};

	return (
		<main>
			<Navbar />
			<section className='backgroundImg h-[100vh] flex flex-col justify-center items-center '>
				<p className='text-3xl font-bold mb-[10px] text-white'>
					Register new user
				</p>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col gap-[1rem] border-[1px] bg-white rounded-lg blur-0 border-black md:px-[4rem] px-[2rem] py-[2rem]'>
					<div className='flex justify-between gap-[3.2rem]'>
						<label
							htmlFor='name'
							className='font-bold'>
							Name
						</label>
						<input
							type='text'
							name='name'
							id='name'
							className='border-[1px] border-black px-[5px]  rounded-lg'
							required
							value={formData.name}
							onChange={handleInputChange}
						/>
					</div>

					<div className='flex justify-between gap-[3.2rem]'>
						<label
							htmlFor='age'
							className='font-bold'>
							Age
						</label>
						<input
							type='number'
							name='age'
							id='age'
							className='border-[1px] border-black px-[5px]  rounded-lg'
							required
							value={formData.age}
							onChange={handleInputChange}
						/>
					</div>

					<div className='flex justify-between gap-[3.2rem]'>
						<label className='font-bold'>Gender</label>
						<div className='flex gap-[12px]'>
							<div>
								<input
									type='radio'
									name='gender'
									id='gender-male'
									value='male'
									required
									onChange={handleInputChange}
									checked={formData.gender === "male"}
								/>
								<label
									htmlFor='gender-male'
									className='font-bold'>
									Male
								</label>
							</div>
							<div>
								<input
									type='radio'
									name='gender'
									id='gender-female'
									value='female'
									required
									onChange={handleInputChange}
									checked={formData.gender === "female"}
								/>
								<label
									htmlFor='gender-female'
									className='font-bold'>
									Female
								</label>
							</div>
							<div>
								<input
									type='radio'
									name='gender'
									id='gender-other'
									value='other'
									required
									onChange={handleInputChange}
									checked={formData.gender === "other"}
								/>
								<label
									htmlFor='gender-other'
									className='font-bold'>
									Other
								</label>
							</div>
						</div>
					</div>

					<div className='flex justify-between gap-[3.2rem]'>
						<label
							htmlFor='city'
							className='font-bold'>
							City
						</label>
						<input
							type='text'
							name='city'
							id='city'
							required
							value={formData.city}
							onChange={handleInputChange}
							className='border-[1px] border-black px-[5px]  rounded-lg'
						/>
					</div>

					<div className='flex justify-between gap-[3.2rem]'>
						<label
							htmlFor='income'
							className='font-bold'>
							Income
						</label>
						<input
							type='number'
							name='income'
							required
							value={formData.income}
							onChange={handleInputChange}
							className='border-[1px] border-black px-[5px] rounded-lg'
						/>
					</div>

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
							value={formData.phone}
							onChange={handleInputChange}
							className='border-[1px] border-black px-[5px] rounded-lg'
						/>
					</div>

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
							value={formData.password}
							onChange={handleInputChange}
							className='border-[1px] border-black px-[5px]  rounded-lg'
						/>
					</div>

					<button
						type='submit'
						className='border-[1px] h-[40px] font-bold border-black md:py-[5px] hover:bg-[#000] hover:text-white'>
						REGISTER
					</button>
				</form>
			</section>
		</main>
	);
}

export default Register;
