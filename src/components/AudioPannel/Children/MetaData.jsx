import { useSelector } from 'react-redux';

const MetaData = () => {
	const mySongs = useSelector((state) => state.musics.mySongs);
	const currentSong = useSelector((state) => state.musics.currentSong);
	const totalTrack = mySongs.length;
	const showMetaData =
		mySongs?.length > 0 ? (
			<>
				<p className="font-bold text-xl">
					{mySongs[currentSong]?.title}
				</p>
				<div className="flex justify-between text-lg">
					<p>{mySongs[currentSong]?.artist}</p>
					<p>
						{currentSong + 1}/{totalTrack}
					</p>
				</div>
			</>
		) : (
			<>
				<p className="animate-pulse bg-gray-50/30 shadow-md w-20 h-2 rounded-full"></p>
				<div className="flex justify-between text-lg">
					<p className="animate-pulse bg-gray-50/30 shadow-md w-16 h-2 rounded-full"></p>
					<p className="animate-pulse bg-gray-50/30 shadow-md w-8 h-2 rounded-full"></p>
				</div>
			</>
		);

    
	return <div className="flex flex-col gap-2">{showMetaData}</div>;
};
export default MetaData;
