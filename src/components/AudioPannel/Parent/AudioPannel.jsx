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
		// console.log('use effect');
		const audio = audioRef.current;
		dispatch(setDuration(Math.floor(audio.duration)));
		dispatch(setIsSongLoading(true));

		// console.dir(audio);

		audio.addEventListener('pause', () => {
			dispatch(setIsPlaying(false));
			dispatch(setIsSongLoading(false));
		});
		audio.addEventListener('play', () => {
			dispatch(setIsPlaying(true));
			dispatch(setIsSongLoading(false));
		});
		audio.addEventListener('ended', () => {
			dispatch(setIsPlaying(false));
			dispatch(setIsSongLoading(false));

		});

		audio.addEventListener('loadedmetadata', () => {
			// console.log('loading music');
			dispatch(setIsSongLoading(true));
			dispatch(setDuration(Math.floor(audio.duration)));
		});
		audio.addEventListener('timeupdate', () => {
			dispatch(setCurrentTime(Math.floor(audio.currentTime)));
		});

		return () => {
			audio.removeEventListener('timeupdate', () => {
				dispatch(setCurrentTime(Math.floor(audio.currentTime)));
			});
			audio.removeEventListener('loadedmetadata', () => {
				// console.log('loading music');
				dispatch(setIsSongLoading(true));
				dispatch(setDuration(Math.floor(audio.duration)));
			});
			audio.removeEventListener('pause', () => {
				dispatch(setIsPlaying(false));
				dispatch(setIsSongLoading(false));
			});
			audio.removeEventListener('play', () => {
				dispatch(setIsPlaying(true));
				dispatch(setIsSongLoading(false));
			});
			audio.removeEventListener('ended', () => {
				dispatch(setIsPlaying(false));
			dispatch(setIsSongLoading(false));

			});
		};
	}, [currentSong]);

	const playPauseSong = () => {
		isPlaying ? audioRef.current.pause() : audioRef.current.play();
	};

	return (
		<footer className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-[30vh] text-slate-200">
			<div className="max-w-3xl mx-auto  px-10 pt-5 pb-2 flex flex-col justify-center gap-4">
				<MetaData />
				<div className="flex justify-center gap-4 items-center">
					<NextPrev type={'prev'} />
					<PlayPause playPauseSong={playPauseSong} />
					<NextPrev type={'next'} />
				</div>
				<TrackBar />
				<audio src={song} autoPlay type="audio/mp3" ref={audioRef}>
					Your browser does not support the audio element.
				</audio>
			</div>
		</footer>
	);
};
export default React.memo(AudioPannel);
