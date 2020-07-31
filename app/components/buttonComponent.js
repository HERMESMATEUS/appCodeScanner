import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import Colors from '@constants/colors';
import { HeightDP, FontSizeRP } from '@constants/calculateSizes';

// ButtonComponent.propTypes = {
//     OnPress: PropTypes.func,
//     Label: PropTypes.string,
//     Disabled: PropTypes.bool,
// };

const ButtonComponent = ({ OnPress, Label, Disabled }) => (
    <TouchableOpacity onPress={() => OnPress} disabled={Disabled} style={styles.Button}>
        <Text style={styles.Text}>{Label}</Text>
    </TouchableOpacity>
)
export default ButtonComponent;


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
        justifyContent: 'center',
        alignItems: 'center',
    }
});
