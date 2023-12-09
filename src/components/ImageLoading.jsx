import loader from '../assets/loader.svg';
const ImageLoading = () => {
	return (
		<div className="bg-transparent fixed left-5 top-36 shadow-xl hidden xl:block">
			<img
				src={loader}
				alt="loader"
				className="w-full h-64 object-cover"
			/>
		</div>
	);
};
export default ImageLoading;
