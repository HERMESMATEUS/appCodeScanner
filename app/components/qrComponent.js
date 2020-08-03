import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import QRCode from "react-native-qrcode-svg";
import { HeightDP, WidthDP, FontSizeRP } from '@constants/calculateSizes';
import Colors from '@constants/colors';
import WaterMark from '@components/waterMark';
import Images from '@constants/images';

QRComponent.propTypes = {
    valueCodificate: PropTypes.string,
    color: PropTypes.string,
};

export default function QRComponent({ valueCodificate, color = Colors.default }) {
    return <View style={styles.container} >
        <View style={[styles.container1, valueCodificate ? styles.backgroundWhite : styles.backgroundGrey]} >
            {
                valueCodificate ?
                    <>
                        <QRCode
                            value={valueCodificate}
                            color={color}
                            backgroundColor={"white"}
                            size={HeightDP(200)}
                            logo={{ uri: Images.base64logo }}
                            logoMargin={10}
                            logoSize={40}
                            logoBorderRadius={10}
                            logoBackgroundColor={"transparent"}
                        />
                        <WaterMark />
                    </>
                    :
                    <View style={styles.container2}>
                        <Text style={styles.Text1}>Aun no ingresas un valor para codificar</Text>
                    </View>
            }
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: HeightDP(20),
        alignItems: 'center'
    },
    container1: {
        borderRadius: HeightDP(20),
        paddingVertical: HeightDP(20),
        paddingHorizontal: WidthDP(20),
        height: HeightDP(260),
        width: WidthDP(240),
    },
    backgroundWhite: {
        backgroundColor: 'white',
    },
    backgroundGrey: {
        backgroundColor: '#bdbdbd',
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: FontSizeRP(18)
    }
});
