import Timer from './Timer';
import { useSelector } from 'react-redux';
import currentTimeToPourcent from '../../../utils/currentTimeToPourcent';
const TrackBar = () => {
	const currentTime = useSelector((state) => state.musics.currentTime);
	const duration = useSelector((state) => state.musics.duration);
	const pourcent = currentTimeToPourcent(currentTime, duration);
	// console.log(pourcent);

	return (
		<div>
			<div className="relative mb-2">
				<div className="absolute bg-black w-full h-2 rounded-full">
					<div
						className={`h-full bg-blue-500 rounded-full`}
                        style={{ width: `${pourcent}%` }}
					></div>
				</div>
			</div>
			<Timer />
		</div>
	);
};
export default TrackBar;
