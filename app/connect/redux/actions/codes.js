import types from '../types';

export const On_CodeScanner = (CodesScanner) => {
    return {
        type: types.CODESCANNER,
        CodesScanner,
    };
};
