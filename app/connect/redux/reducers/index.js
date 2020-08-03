import { combineReducers } from 'redux';
import { persist } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import codes from './codes';

const persistConfig = {
    key: 'codes',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    // codes: persist(persistConfig, codes),
    codes
});

export default rootReducer;