import {useSelector} from 'react-redux';

const MetaData = () => {
 const mySongs = useSelector((state) => state.musics.mySongs);
 const currentSong = useSelector((state) => state.musics.currentSong);
 const totalTrack = mySongs.length;
//  console.log(totalTrack)
  return (
    <div className='flex flex-col gap-2'>
        <p className="font-bold text-xl">{mySongs[currentSong]?.title}</p>
        <div className="flex justify-between text-lg">
            <p>{mySongs[currentSong]?.artist}</p>
            <p>{currentSong + 1}/{totalTrack}</p>
        </div>
    </div>
  )
}
export default MetaData