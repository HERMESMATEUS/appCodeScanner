'use strict';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default function ScannerQR() {
    const [startCamera, setStatusCamera] = useState(false)

    var camera = React.useRef(null);

    const ChangeStatusCamera = (value) => setStatusCamera(value);

    return (
        <View style={styles.container} >
            {
                startCamera ?
                    <RNCamera
                        ref={ref => { camera = ref; }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        onBarCodeRead={({ data }) => {
                            ChangeStatusCamera(false)
                            alert(data);
                        }}
                    />
                    : null
            }
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => ChangeStatusCamera(true)} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> Iniciar </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ChangeStatusCamera(false)} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> Detener </Text>
                </TouchableOpacity>
            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});
