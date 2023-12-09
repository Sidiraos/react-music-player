import Track from './Track';
import { useSelector } from 'react-redux';
import React from 'react';

const ShowTrackList = () => {
	const mySongs = useSelector((state) => state.musics.mySongs);
	return (
		<div className=" max-w-xl mx-auto flex flex-col gap-4 mt-4 select-none ">
			{mySongs.map((song) => {
				return <Track key={song.id} track={song} />;
			})}
		</div>
	);
};
export default React.memo(ShowTrackList);
