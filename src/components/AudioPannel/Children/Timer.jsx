import {useSelector} from 'react-redux';
import formatedTime from '../../../utils/formatTime';
const Timer = () => {
    const duration = useSelector((state) => state.musics.duration);
    const currentTime = useSelector((state) => state.musics.currentTime);
  return (
    <div className="flex justify-between">
        <p>{formatedTime(currentTime)}</p>
        <p>{formatedTime(duration)}</p>
    </div>
  )
}
export default Timer