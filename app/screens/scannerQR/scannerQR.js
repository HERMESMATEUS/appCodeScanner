'use strict';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ScannerQRComponent from '@components/scannerQRComponent'
import MainContainer from '@components/mainContainer';
import ModalComponent from '@components/modalComponent';
import TextStyle from '@generalsStyles/texts';
import { On_CodeScannerOthers } from '@connect/redux/actions/codes';
import { useDispatch } from 'react-redux';
import Colors from '@constants/colors';

export default function ScannerQR() {

    const [startCamera, setStatusCamera] = useState(false)
    const dispatch = useDispatch();
    const [dataCodigoScanned, setDataCodigoScanned] = useState({ show: false, valueCode: '' })
    const { show, valueCode } = dataCodigoScanned;
    const ChangeStatusCamera = (value) => setStatusCamera(value);

    const onBarCodeRead = (code) => {
        setStatusCamera(false);
        setDataCodigoScanned({ show: true, valueCode: code })
        dispatch(On_CodeScannerOthers({ valueCodificate: code, color: Colors.default }))
    };

    return <MainContainer>
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={TextStyle.Title1}>Escanea tu codigo</Text>
        </View>

        <ScannerQRComponent
            onBarCodeRead={(code) => onBarCodeRead(code)}
            startCamera={startCamera}
            ChangeStatusCamera={(value) => ChangeStatusCamera(value)}
        />

        <ModalComponent
            Show={show}
            Title={'Codigo'}
            ValueCode={valueCode}
            Close={() => setDataCodigoScanned({ show: false })}
        />
    </MainContainer>
}