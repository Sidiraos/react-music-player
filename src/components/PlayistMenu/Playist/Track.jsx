import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSong } from '../../../redux/Slices/musicStore';
import SoundPlaying from '../../SoundPlaying';
import React from 'react';
const Track = ({ track }) => {
	// console.log(track);
	const dispatch = useDispatch();
	const mySongs = useSelector((state) => state.musics.mySongs);
	const itemToFind = mySongs.find((song) => song.id === track.id);
	const indexOfItem = mySongs.indexOf(itemToFind);
	const currentSong = useSelector((state) => state.musics.currentSong);
	const isSongLoading = useSelector((state) => state.musics.isSongLoading);
	// console.log(currentSong);
	// console.log(indexOfItem);
	const handleClick = () => {
		indexOfItem !== -1 && dispatch(setCurrentSong(indexOfItem));
		// console.log(indexOfItem);
		// console.log(currentSong);
	};
	const bgCurrentSong = currentSong === indexOfItem ? 'bg-sky-400 text-black' : 'bg-sky-100 text-black';
	const showAnimatePlaying = currentSong === indexOfItem && !isSongLoading ? <SoundPlaying /> : '';
	
	return (
		<button
			onClick={handleClick}
			className={`rounded-md shadow-md px-3 py-4 cursor-pointer font-bold hover:bg-sky-400 hover:shadow-lg text-start ${bgCurrentSong} flex justify-between items-center`}
		>	
			<span>{track.title} - {track.artist}</span>
			{showAnimatePlaying}
		</button>
	);
};
export default React.memo(Track);
