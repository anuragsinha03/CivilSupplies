import heroImg from "./../assets/hero.jpg";
import Navbar from "../components/Navbar";
import img1 from "./../assets/1.jpg";
import img2 from "./../assets/2.jpg";
import img3 from "./../assets/3.jpg";
import img4 from "./../assets/4.jpg";
import img5 from "./../assets/rationBlack.jpeg";

function Home() {
	return (
		<main className='flex flex-col h-screen w-full bg-slate-100'>
			<Navbar />
			<section className='flex flex-col'>
				<div className='md:flex flex-col-reverse md:flex-row-reverse'>
					<div className='right-hero'>
						<img
							src={heroImg}
							alt='hero-image'
						/>
					</div>
					<div className='left-hero  md:flex md:flex-col  md:w-[60vw] px-[20px] py-[20px]'>
						<p className='text-3xl font-bold leading-8 '>
							<p className='text-3xl'>
								Transforming India&apos;s Supply Chain
								Infrastructure
							</p>
						</p>
						<p className='text-justify py-4 md:pr-[2rem] md:text-2xl'>
							Welcome to the forefront of India&apos;s supply
							chain revolution. Our platform is dedicated to
							empowering government agencies with the tools and
							insights needed to optimize procurement,
							distribution, and logistics nationwide. Our platform
							is more than just a tool – it&apos;s a catalyst for
							positive change. By optimizing supply chain
							operations, we aim to improve the lives of millions
							of citizens across India and build a brighter future
							for generations to come.
						</p>
					</div>
				</div>

				<div className='px-[20px] py-[20px] text-justify'>
					<p className='text-3xl font-semibold md:font-bold'>
						Join the Revolution
					</p>
					<p className='md:text-2xl'>
						Join us in our mission to transform India&apos;s supply
						chain infrastructure. Together, we can unlock new
						opportunities, drive sustainable growth, and build a
						more prosperous future for all.
					</p>
				</div>

				<div className='flex md:flex-row flex-col gap-[10px] justify-evenly items-center'>
					<div>
						<img
							className='h-[200px] w-[200px] rounded-full'
							src={img1}
							alt=''
						/>
					</div>
					<div>
						<img
							className='h-[200px] w-[200px] rounded-full'
							src={img2}
							alt=''
						/>
					</div>
					<div>
						<img
							className='h-[200px] w-[200px] rounded-full'
							src={img5}
							alt=''
						/>
					</div>
					<div>
						<img
							className='h-[200px] w-[200px] rounded-full'
							src={img3}
							alt=''
						/>
					</div>
					<div>
						<img
							className='h-[200px] w-[200px] rounded-full'
							src={img4}
							alt=''
						/>
					</div>
				</div>
			</section>
			<footer className='flex justify-center items-center py-2 mt-4 border-[1px] border-black'>
				<p>
					All Rights Reserved. Built By Balaji, Shubham, Anurag,
					Naveen and Yaswanth
				</p>
			</footer>
		</main>
	);
}

export default Home;
