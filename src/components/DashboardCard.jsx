/* eslint-disable react/prop-types */
function DashboardCard({ itemName, quantity, imageSrc }) {
	return (
		<div className='card bg-white shadow-lg p-4 m-4 flex items-center justify-between'>
			<img
				src={imageSrc}
				alt={itemName}
				className='w-16 h-16 rounded-full'
			/>
			<div className='ml-4'>
				<h3 className='text-lg font-bold'>{itemName}</h3>
				<p>Quantity: {quantity}</p>
			</div>
		</div>
	);
}

export default DashboardCard;
