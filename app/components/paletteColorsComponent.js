import React from 'react'
import { FlatList, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Colors, { qrCodesColor } from '@constants/colors';
import PropTypes from 'prop-types';
import { HeightDP, WidthDP } from '@constants/calculateSizes';
import TextStyle from '@generalsStyles/texts';

PaletteColorsComponent.propTypes = {
    onPress: PropTypes.func,
};

export default function PaletteColorsComponent({ onPress }) {
    return (
        <View style={{ width: WidthDP(328), }} >
            <Text style={TextStyle.Body1}>{'Selecciona tu preferencia de color'}</Text>
            <View style={styles.container} >
                {
                    qrCodesColor.map((item) => <Item item={item} onPress={onPress} />)
                }
            </View>
        </View>
    )
}

const Item = ({ item, onPress }) => <TouchableOpacity
    onPress={() => onPress(item)}
    style={{ ...styles.Item, backgroundColor: item }}
/>

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: WidthDP(328),
        paddingHorizontal: WidthDP(10),
        paddingVertical: HeightDP(10),
        borderRadius: HeightDP(4),
        marginTop: HeightDP(10),
        backgroundColor: Colors.black_low,
    },
    Item: {
        borderWidth: HeightDP(0.3),
        borderColor: Colors.white,
        marginRight: WidthDP(5),
        marginTop: HeightDP(5),
        borderRadius: HeightDP(17.5),
        height: HeightDP(35),
        width: WidthDP(35),
    }
});
