import Navbar from "../components/Navbar";

function AboutUs() {
	return (
		<main>
			<Navbar />
			<section className='px-6 py-10 bg-gray-100 min-h-screen'>
				<div className='container mx-auto'>
					<h1 className='text-4xl font-bold text-center mb-8'>
						Transforming India&apos;s Supply Chain Infrastructure
					</h1>
					<p className='text-lg text-center text-gray-700 mb-12'>
						At Civil Supplies Corporation, we are dedicated to
						empowering government agencies with the tools and
						insights needed to optimize procurement, distribution,
						and logistics nationwide. Our platform is more than just
						a tool – it&apos;s a catalyst for positive change. By
						optimizing supply chain operations, we aim to improve
						the lives of millions of citizens across India and build
						a brighter future for generations to come.
					</p>

					{/* Cards for standout points */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{/* Vision Card */}
						<div className='bg-white rounded-lg shadow-lg p-6'>
							<h2 className='text-2xl font-semibold mb-4'>
								Our Vision
							</h2>
							<p>
								Our vision is to create a seamless, efficient,
								and transparent supply chain system that
								empowers government agencies to serve the public
								with greater efficiency.
							</p>
						</div>

						{/* Mission Card */}
						<div className='bg-white rounded-lg shadow-lg p-6'>
							<h2 className='text-2xl font-semibold mb-4'>
								Our Mission
							</h2>
							<p>
								Our mission is to provide innovative solutions
								that support government agencies in their
								efforts to deliver critical supplies to the
								public.
							</p>
						</div>

						{/* What We Offer Card */}
						<div className='bg-white rounded-lg shadow-lg p-6'>
							<h2 className='text-2xl font-semibold mb-4'>
								What We Offer
							</h2>
							<p>
								We offer a suite of tools designed to manage
								procurement, track inventory, coordinate
								distribution, and monitor logistics. Our
								platform is designed to be user-friendly and
								adaptable to the specific needs of each agency.
							</p>
						</div>

						{/* Values Card */}
						<div className='bg-white rounded-lg shadow-lg p-6'>
							<h2 className='text-2xl font-semibold mb-4'>
								Our Values
							</h2>
							<p>
								We value transparency, efficiency,
								collaboration, and innovation. Our platform
								fosters a culture of accountability and
								continual improvement.
							</p>
						</div>

						{/* Impact Card */}
						<div className='bg-white rounded-lg shadow-lg p-6'>
							<h2 className='text-2xl font-semibold mb-4'>
								Our Impact
							</h2>
							<p>
								Since our inception, we have partnered with
								numerous government agencies to improve the
								delivery of essential goods and enhance public
								trust.
							</p>
						</div>

						{/* Contact Information Card */}
						<div className='bg-white rounded-lg shadow-lg p-6'>
							<h2 className='text-2xl font-semibold mb-4'>
								Get in Touch
							</h2>
							<p>
								For more information, request a demonstration,
								or discuss partnership opportunities, please
								contact us at:
							</p>
							<p>
								<strong>Email:</strong>{" "}
								info@civilsuppliescorporation.com
								<br />
								<strong>Phone:</strong> +91 1234 567 890
								<br />
								<strong>Address:</strong> 123 Civil Supplies
								Avenue, New Delhi, India
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default AboutUs;
