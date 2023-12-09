import nextIcon from '../../../assets/next-icon.svg'
import prevIcon from '../../../assets/prev-icon.svg'
import {useDispatch , useSelector} from 'react-redux';
import { next ,prev } from '../../../redux/Slices/musicStore';
const NextPrev = ({type}) => {
    const dispatch = useDispatch()
    const mySongs = useSelector((state) => state.musics.mySongs);
    const handleClick = () => {
		if(mySongs?.length === 0) return;
        if(type === 'next') {
            dispatch(next())
        } else {
            dispatch(prev())
        }
    }
  return (
    <button onClick={handleClick} className='rounded-full bg-gray-400 shadow-md w-10 h-10 flex items-center justify-center outline-none'>
        <img src={type === 'prev' ? prevIcon : nextIcon} alt={type} className='w-6' />
    </button>
  )
}
export default NextPrev