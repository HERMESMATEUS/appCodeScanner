import types from '../types';

export const On_CodeScannerMine = (CodesScanner) => {
    return {
        type: types.CODESCANNERMINE,
        CodesScanner,
    };
};

export const On_CodeScannerOthers = (CodesScanner) => {
    return {
        type: types.CODESCANNERMINEOTHER,
        CodesScanner,
    };
};

export const On_ALLCodeScannerOthers = (CodesScanner) => {
    return {
        type: types.ALLCODESCANNERMINEOTHER,
        CodesScanner,
    };
};

export const On_ALLCodeScannerMine = (CodesScanner) => {
    return {
        type: types.ALLCODESCANNERMINE,
        CodesScanner,
    };
};
