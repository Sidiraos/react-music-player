import React from 'react';
import MetaData from '../Children/MetaData';
import TrackBar from '../Children/TrackBar';
import NextPrev from '../Children/NextPrev';
import PlayPause from '../Children/PlayPause';
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';
import {
	setIsPlaying,
	setCurrentTime,
	setDuration,
	setIsSongLoading,
} from '../../../redux/Slices/musicStore';

const AudioPannel = () => {
	const audioRef = useRef();
	const mySongs = useSelector((state) => state.musics.mySongs);
	const currentSong = useSelector((state) => state.musics.currentSong);
	const song = mySongs[currentSong]?.audio;
	const isPlaying = useSelector((state) => state.musics.isPlaying);
	const dispatch = useDispatch();

	useEffect(() => {
		const audio = audioRef.current;
		dispatch(setDuration(Math.floor(audio.duration)));
		dispatch(setIsSongLoading(true));

		const handleChangeMetadata = () => {
			dispatch(setIsSongLoading(true));
			dispatch(setDuration(Math.floor(audio.duration)));
		};

		const handlePause = () => {
			dispatch(setIsPlaying(false));
			dispatch(setIsSongLoading(false));
		};
		const handlePlay = () => {
			dispatch(setIsPlaying(true));
			dispatch(setIsSongLoading(false));
		};
		const handleEnded = () => {
			dispatch(setIsPlaying(false));
			dispatch(setIsSongLoading(false));
		};

		const handleTimeUpdate = () => {
			dispatch(setCurrentTime(Math.floor(audio.currentTime)));
		};

		// console.dir(audio);
		audio.addEventListener('loadeddata', handleChangeMetadata);
		audio.addEventListener('loadedmetadata', handleChangeMetadata);
		window.addEventListener('load', handleChangeMetadata);
		audio.addEventListener('pause', handlePause);
		audio.addEventListener('play', handlePlay);
		audio.addEventListener('ended', handleEnded);
		audio.addEventListener('timeupdate', handleTimeUpdate);

		return () => {
			audio.removeEventListener('loadeddata', handleChangeMetadata);
			audio.removeEventListener('loadedmetadata', handleChangeMetadata);
			window.removeEventListener('load', handleChangeMetadata);
			audio.removeEventListener('pause', handlePause);
			audio.removeEventListener('play', handlePlay);
			audio.removeEventListener('ended', handleEnded);
			audio.removeEventListener('timeupdate', handleTimeUpdate);
		};
	}, [currentSong]);

	const playPauseSong = () => {
		isPlaying ? audioRef.current.pause() : audioRef.current.play();
	};
	return (
		<footer className="bg-gradient-to-r from-slate-900 to-slate-700  text-slate-200 select-none min-h-[232px]">
			<div className="sm:max-w-3xl sm:mx-auto w-full px-10 py-5 flex flex-col justify-center gap-4 h-full">
				<MetaData />
				<div className="flex justify-center gap-4 items-center">
					<NextPrev type={'prev'} />
					<PlayPause playPauseSong={playPauseSong} />
					<NextPrev type={'next'} />
				</div>
				<TrackBar />
				<audio
					src={song}
					// autoPlay={(duration > 0 && !duration) && true}
					autoPlay
					type="audio/mp3"
					ref={audioRef}
					id="audio"
				>
					Your browser does not support the audio element.
				</audio>
			</div>
		</footer>
	);
};
export default React.memo(AudioPannel);
