import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAudioSong } from '../../../redux/Slices/musicStore';
import IsLoading from '../../IsLoading';
import ErrorFetching from '../../ErrorFetching';
import ShowTrackList from './ShowTrackList';
const Playist = () => {
	const [errMsg, setErrMsg] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const myPlayistsID = ['3155776842' , '6298147704'];
	const url = `https://deezerdevs-deezer.p.rapidapi.com/playlist/${myPlayistsID[1]}`;
	const API_KEY = import.meta.env.VITE_API_KEY
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key':API_KEY,
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		},
	};

	useEffect(() => {
		setIsLoading(true);
		fetch(url, options)
			.then((response) => {
				if (!response.ok) {
					throw Error('Could not get that song from soundcloud');
				}
				return response.json();
			})
			.then((data) => {
				setIsLoading(false);
				const tracks = data.tracks.data;
				const songs = tracks.map((track) => {
					return {
						id: track.id,
						audio: track.preview,
						title: track.title_short,
						artist: track.artist.name,
						cover: track.album.cover_big,
					};
				});
				// console.log(data.tracks.data);
				dispatch(addAudioSong(songs));
				setErrMsg(null);
			})
			.catch((err) => {
				console.error(err.message);
				setIsLoading(false);
				setErrMsg(err.message);
			});
	}, []);

	const displayUI = isLoading ? (
		<IsLoading />
	) : errMsg ? (
		<ErrorFetching erroMsg={errMsg} />
	) : (
		<ShowTrackList />
	);

	return displayUI;
};

export default React.memo(Playist);
