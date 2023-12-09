import Playist from './Playist/Playist';
import { useSelector } from 'react-redux';
import ImageLoading from '../ImageLoading';
const PlayistMenu = () => {
	const mySongs = useSelector((state) => state.musics.mySongs);
	const currentSong = useSelector((state) => state.musics.currentSong);
	const cover = mySongs[currentSong]?.cover;
	const showUICover = cover ? (
		<div className="fixed left-5 top-36 shadow-xl hidden xl:block">
			<img src={cover} alt="cover" className="w-full h-64 object-cover" />
		</div>
	) : (
		<ImageLoading />
	);

	return (
		<header className="bg-slate-800 h-[70vh] overflow-y-auto p-5 relative">
			<h1 className="text-gray-200 max-w-xl mt-20 text-2xl sm:text-2xl mx-auto xl:fixed">
				PlayerMania - Your songs.
			</h1>
			<Playist />
			{showUICover}
		</header>
	);
};
export default PlayistMenu;
