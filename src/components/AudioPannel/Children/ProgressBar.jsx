import { useSelector } from 'react-redux';

const ProgressBar = () => {
	const currentTime = useSelector((state) => state.musics.currentTime);
	const duration = useSelector((state) => state.musics.duration);
	return (
		<div
			className={`h-full bg-blue-500 rounded-full origin-left pointer-events-none`}
			style={{ transform: `scaleX(${currentTime / duration})` }}
		></div>
	);
};
export default ProgressBar;
