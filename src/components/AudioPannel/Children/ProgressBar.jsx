import { useSelector } from 'react-redux';
import currentTimeToPourcent from '../../../utils/currentTimeToPourcent';

const ProgressBar = () => {
	const currentTime = useSelector((state) => state.musics.currentTime);
	const duration = useSelector((state) => state.musics.duration);
	const pourcent = currentTimeToPourcent(currentTime, duration);
	return (
		<div
			className={`h-full bg-blue-500 rounded-full`}
			style={{ width: `${pourcent}%` }}
		></div>
	);
};
export default ProgressBar;
