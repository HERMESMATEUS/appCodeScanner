'use strict';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ScannerQRComponent from '@components/scannerQRComponent'
import MainContainer from '@components/mainContainer';
import TextStyle from '@generalsStyles/texts';

export default function ScannerQR() {
    const [startCamera, setStatusCamera] = useState(false)

    const ChangeStatusCamera = (value) => setStatusCamera(value);

    const onBarCodeRead = (code) => {
        setStatusCamera(false);
        alert(code)
    };

    return <MainContainer>
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={TextStyle.Title1}>Escanea tu codigo</Text>
        </View>
        < ScannerQRComponent
            onBarCodeRead={(code) => onBarCodeRead(code)}
            startCamera={startCamera}
            ChangeStatusCamera={(value) => ChangeStatusCamera(value)}
        />
    </MainContainer>
}