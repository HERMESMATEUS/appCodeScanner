import AsyncStorage from '@react-native-community/async-storage';
import types from '../types';

export default function reducer(state = { CodesScannerMine: [], CodesScannerOthers: [] }, action) {
    switch (action.type) {
        case types.CODESCANNERMINE:
            let CodesScannerMine = [action.CodesScanner, ...state.CodesScannerMine];
            SaveStorage('CodeScannerMine', CodesScannerMine)
            return {
                ...state,
                CodesScannerMine: CodesScannerMine
            }
        case types.CODESCANNERMINEOTHER:
            let CodesScannerOthers = [action.CodesScanner, ...state.CodesScannerOthers];
            SaveStorage('CodesScannerOthers', CodesScannerOthers)
            return {
                ...state,
                CodesScannerOthers: CodesScannerOthers
            }
        case types.ALLCODESCANNERMINE:
            return {
                ...state,
                CodesScannerMine: action.CodesScanner
            }
        case types.ALLCODESCANNERMINEOTHER:
            return {
                ...state,
                CodesScannerOthers: action.CodesScanner
            }

        default:
            return state;
    }
}

function SaveStorage(key, store) {
    AsyncStorage.setItem(key, JSON.stringify(store));
}