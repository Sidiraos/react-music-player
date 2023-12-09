import play from '../../../assets/play-icon.svg';
import pause from '../../../assets/pause-icon.svg';
import loader from '../../../assets/loader.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setIsPlaying } from '../../../redux/Slices/musicStore';

const PlayPause = ({ playPauseSong }) => {
	const dispatch = useDispatch();
	const isPlaying = useSelector((state) => state.musics.isPlaying);
	const isSongLoading = useSelector((state) => state.musics.isSongLoading);
	const mySongs = useSelector((state) => state.musics.mySongs);
	const duration = useSelector((state) => state.musics.duration);
	// console.log(duration);
	const handleClick = () => {
		if (mySongs?.length === 0 && duration === 0 && !duration) return;

		if (isPlaying) {
			playPauseSong();
			dispatch(setIsPlaying(false));
		} else {
			playPauseSong();
			dispatch(setIsPlaying(true));
		}
		// console.log(isPlaying);
	};
	return (
		<button
			onClick={handleClick}
			className="rounded-full bg-white shadow-md w-16 h-16 flex items-center justify-center relative outline-none"
		>
			<img
				src={loader}
				alt="loading"
				className={`absolute ${isSongLoading ? 'block' : 'hidden'}`}
			/>
			<img
				src={isPlaying && !isSongLoading ? pause : play}
				alt={isPlaying && !isSongLoading ? 'pause' : 'play'}
				className="w-full"
			/>
		</button>
	);
};
export default PlayPause;
