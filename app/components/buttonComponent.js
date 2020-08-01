import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import Colors from '@constants/colors';
import { HeightDP, FontSizeRP, WidthDP } from '@constants/calculateSizes';

ButtonComponent.propTypes = {
    OnPress: PropTypes.func,
    Label: PropTypes.string,
    Disabled: PropTypes.bool,
};

export default function ButtonComponent({ OnPress, Label, Disabled = false }) {
    return <TouchableOpacity onPress={() => OnPress()} disabled={Disabled} style={styles.Button}>
        <Text style={styles.Text}>{Label}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    Text: {
        color: Colors.white,
        fontSize: FontSizeRP(18),
        fontWeight: 'bold'
    },
    Button: {
        backgroundColor: Colors.red,
        marginTop: HeightDP(10),
        borderWidth: HeightDP(1),
        borderRadius: HeightDP(8),
        height: HeightDP(50),
        paddingVertical: HeightDP(10),
        paddingHorizontal: WidthDP(10),
        justifyContent: 'center',
        alignItems: 'center',
    }
});
