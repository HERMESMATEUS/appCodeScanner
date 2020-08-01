'use strict';
import React from 'react';
import { StyleSheet, Image, View, Animated } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ButtonComponent from '@components/buttonComponent';
import { HeightDP, WidthDP } from '@constants/calculateSizes';
import Images from '@constants/images';
import PropTypes from 'prop-types';
import Colors from '@constants/colors';

ScannerQRComponent.propTypes = {
    ChangeStatusCamera: PropTypes.func,
    onBarCodeRead: PropTypes.func,
    startCamera: PropTypes.bool,
};

export default function ScannerQRComponent({ ChangeStatusCamera, startCamera, onBarCodeRead }) {

    var camera = React.useRef(null);

    const androidCameraPermissionOptions = {
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
    }

    const androidRecordAudioPermissionOptions = {
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
    }

    return (
        <View style={{ flex: 1 }}>
            {
                startCamera ?
                    <View style={styles.container} >
                        <RNCamera
                            ref={ref => { camera = ref; }}
                            style={styles.preview}
                            type={RNCamera.Constants.Type.back}
                            androidCameraPermissionOptions={androidCameraPermissionOptions}
                            androidRecordAudioPermissionOptions={androidRecordAudioPermissionOptions}
                            onBarCodeRead={({ data }) => onBarCodeRead(data)}
                        />
                        <View style={styles.preview2}>
                            <View style={styles.box}>
                                {/* <View style={{ borderWidth: HeightDP(1), borderColor: Colors.default }} /> */}
                            </View>
                        </View>
                    </View>
                    :
                    <View style={styles.preview} >
                        <Image resizeMode='contain' style={styles.Image} source={Images.cameraOff} />
                    </View>
            }
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: HeightDP(50), width: WidthDP(328), paddingHorizontal: WidthDP(40) }}>
                    <ButtonComponent OnPress={() => ChangeStatusCamera(true)} Label={'Iniciar'} />
                    <ButtonComponent OnPress={() => ChangeStatusCamera(false)} Label={'Detener'} />
                </View>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        borderWidth: HeightDP(1),
        borderColor: Colors.default,
        width: WidthDP(250),
        height: HeightDP(250),
        justifyContent: 'center',
    },
    preview2: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        width: WidthDP(328),
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
    Image: {
        height: HeightDP(150),
    }
});
