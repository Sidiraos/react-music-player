import Timer from './Timer';
import ProgressBar from './ProgressBar';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTime } from '../../../redux/Slices/musicStore';

const TrackBar = () => {
	const trackBarRef = useRef();
	const dispatch = useDispatch();
	const duration = useSelector((state) => state.musics.duration);
	const updatedCurrentTime = (e) => {
		const rect = trackBarRef.current.getBoundingClientRect();
		const clickX = e.clientX - rect.left;
		const newCurrentTimeValue =
			Math.floor((clickX / rect.width) * duration) + 1;
		duration && dispatch(setCurrentTime(newCurrentTimeValue));
		if (duration)
			document.getElementById('audio').currentTime = newCurrentTimeValue;
	};

	return (
		<div>
			<div className="relative mb-2">
				<div
					className="absolute bg-black w-full h-2 rounded-full cursor-pointer"
					ref={trackBarRef}
					onClick={updatedCurrentTime}
				>
					<ProgressBar />
				</div>
			</div>
			<Timer />
		</div>
	);
};
export default TrackBar;
