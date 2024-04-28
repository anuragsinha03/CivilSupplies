import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='bg-gray-800 text-white p-4'>
			<div className='flex justify-around items-center'>
				<Link
					to='/'
					className='md:text-[1.5rem] ml-[1rem] font-bold'>
					CSC
				</Link>

				{/* Hamburger menu for smaller screens */}
				<div className='md:hidden'>
					<button
						onClick={toggleMenu}
						className='focus:outline-none'>
						{isOpen ? (
							<XIcon className='w-6 h-6' />
						) : (
							<MenuIcon className='w-6 h-6' />
						)}
					</button>
				</div>

				{/* Links for larger screens */}
				<div
					className={`md:flex md:gap-[20px] md:mr-[1rem] md:space-x-4 hidden
					}`}>
					<Link
						to='/'
						className='md:text-[1.2rem] md:font-semibold hover:text-gray-400 '>
						HOME
					</Link>
					<Link
						to='/aboutus'
						className='md:text-[1.2rem] md:font-semibold hover:text-gray-400 '>
						ABOUT
					</Link>
					<Link
						to='/services'
						className='md:text-[1.2rem] md:font-semibold hover:text-gray-400 '>
						SERVICES
					</Link>
					<Link
						to='/login'
						className='
                       md:text-[1.2rem] md:font-semibold hover:text-gray-400 '>
						LOGIN
					</Link>
					<Link
						to='/register'
						className='md:text-[1.2rem] md:font-semibold hover:text-gray-400 '>
						REGISTER
					</Link>
				</div>
			</div>

			{/* Dropdown menu for smaller screens */}
			{isOpen && (
				<div className='md:hidden flex flex-col mt-4 space-y-2'>
					<Link
						to='/'
						className='hover:text-gray-400'>
						HOME
					</Link>
					<Link
						to='/aboutus'
						className='hover:text-gray-400'>
						ABOUT
					</Link>
					<Link
						to='/services'
						className='hover:text-gray-400'>
						SERVICES
					</Link>
					<Link
						to='/login'
						className='hover:text-gray-400'>
						LOGIN
					</Link>
					<Link
						to='/register'
						className='hover:text-gray-400'>
						REGISTER
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
