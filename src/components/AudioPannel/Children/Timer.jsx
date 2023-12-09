import { useSelector } from 'react-redux';
import formatedTime from '../../../utils/formatTime';
const Timer = () => {
	const duration = useSelector((state) => state.musics.duration);
	const currentTime = useSelector((state) => state.musics.currentTime);
	const audioTimeData = duration && duration > 0 ? (
			<>
				<p>{formatedTime(currentTime)}</p>
				<p>{formatedTime(duration)}</p>
			</>
		) : (
			<>
				<p>{formatedTime(currentTime)}</p>
				<p className="animate-pulse bg-gray-50/30 shadow-md w-8 h-2 rounded-full mt-1"></p>
			</>
		);
	return <div className="flex justify-between">{audioTimeData}</div>;
};
export default Timer;
