import {configureStore} from '@reduxjs/toolkit';
import  musicSlice  from './Slices/musicStore';

const store = configureStore(
    {
        reducer : {
            musics : musicSlice
        },
        devTools : true
    }
);

export default store;