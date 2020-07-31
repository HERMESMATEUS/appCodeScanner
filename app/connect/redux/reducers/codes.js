import types from '../types';

export default function reducer(state = {}, action) {
    switch (action.type) {

        case types.CODESCANNER:
            return {
                ...state,
                CodesScanner: action.CodesScanner,
            }

        default:
            return state;
    }
}