import types from '../types';

export default function reducer(state = { CodesScannerMine: [], CodesScannerOthers: [] }, action) {
    switch (action.type) {
        case types.CODESCANNERMINE:
            return {
                ...state,
                CodesScannerMine: [action.CodesScanner, ...state.CodesScannerMine],
            }
        case types.CODESCANNERMINEOTHER:
            return {
                ...state,
                CodesScannerOthers: [action.CodesScanner, ...state.CodesScannerOthers],
            }
        default:
            return state;
    }
}