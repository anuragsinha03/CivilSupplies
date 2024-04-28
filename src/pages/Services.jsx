import Navbar from "../components/Navbar";

function Services() {
	return (
		<main>
			<Navbar />
			<section className='px-6 py-10 bg-gray-100 min-h-screen'>
				<div className='container mx-auto'>
					<h1 className='text-4xl font-bold text-center mb-8'>
						Our Services
					</h1>
					<p className='text-lg text-center text-gray-700 mb-12'>
						At Civil Supplies Corporation, we offer a range of
						services designed to optimize supply chain operations
						for government agencies and other stakeholders. Our
						expertise lies in procurement, distribution, logistics,
						and more. Explore our services to learn how we can help
						you achieve your goals.
					</p>

					{/* Grid layout with service cards */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{/* Procurement Services */}
						<div className='bg-white rounded-lg shadow-lg p-6'>
							<h2 className='text-2xl font-semibold mb-4'>
								Procurement
							</h2>
							<p>
								Our procurement services ensure that you get the
								best quality materials at competitive prices. We
								manage the entire procurement process, from
								sourcing to contract management, ensuring
								compliance and transparency.
							</p>
						</div>

						{/* Inventory Management Services */}
						<div className='bg-white rounded-lg shadow-lg p-6'>
							<h2 className='text-2xl font-semibold mb-4'>
								Inventory Management
							</h2>
							<p>
								We provide advanced inventory management
								solutions to help you track and manage your
								stock efficiently. Our systems enable real-time
								monitoring, reducing waste and optimizing
								inventory levels.
							</p>
						</div>

						{/* Distribution Services */}
						<div className='bg-white rounded-lg shadow-lg p-6'>
							<h2 className='text-2xl font-semibold mb-4'>
								Distribution
							</h2>
							<p>
								Our distribution services ensure timely and
								efficient delivery of goods. We coordinate
								logistics and transportation to ensure that
								supplies reach their destinations on time and in
								perfect condition.
							</p>
						</div>

						{/* Logistics Services */}
						<div className='bg-white rounded-lg shadow-lg p-6'>
							<h2 className='text-2xl font-semibold mb-4'>
								Logistics
							</h2>
							<p>
								We offer comprehensive logistics solutions to
								streamline your operations. Our expertise in
								route planning, transportation, and supply chain
								optimization ensures that you can meet your
								objectives with minimal effort.
							</p>
						</div>

						{/* Consulting Services */}
						<div className='bg-white rounded-lg shadow-lg p-6'>
							<h2 className='text-2xl font-semibold mb-4'>
								Consulting
							</h2>
							<p>
								Our consulting services provide you with expert
								guidance on supply chain optimization. We help
								you identify areas for improvement and implement
								strategies to enhance efficiency and reduce
								costs.
							</p>
						</div>

						{/* Customer Support Services */}
						<div className='bg-white rounded-lg shadow-lg p-6'>
							<h2 className='text-2xl font-semibold mb-4'>
								Customer Support
							</h2>
							<p>
								Our customer support team is dedicated to
								providing you with exceptional service. We offer
								ongoing assistance, training, and
								troubleshooting to ensure you get the most out
								of our services.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Services;
