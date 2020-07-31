import React from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import { HeightDP, WidthDP } from '@constants/calculateSizes';
import Colors from '@constants/colors';
import TextStyle from '@generalsStyles/texts';

InputComponent.propTypes = {
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    Title: PropTypes.string,
    placeholder: PropTypes.string,
};

export default function InputComponent({ onChangeText, value, Title, placeholder }) {
    return (
        <View>
            <Text style={TextStyle.Body1}>{Title}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={Colors.whiteOpacity5}
                multiline={false}
                style={styles.TextInput}
                onChangeText={(value) => onChangeText(value)}
                value={value}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    Title: {
        color: Colors.white
    },
    TextInput: {
        marginTop: HeightDP(10),
        borderWidth: HeightDP(1),
        borderColor: Colors.red,
        borderRadius: HeightDP(4),
        color: Colors.white,
        height: HeightDP(50),
        textAlignVertical: 'center',
        paddingHorizontal: WidthDP(10)
    }
});