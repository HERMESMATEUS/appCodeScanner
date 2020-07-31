import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { HeightDP, WidthDP } from '@constants/calculateSizes';
import Colors from '@constants/colors';

export default function MainContainer({ children }) {
    return <View style={styles.container}>
        <ScrollView>
            {children}
        </ScrollView>
    </View >
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.black,
        paddingHorizontal: WidthDP(16),
        paddingVertical: HeightDP(16),
    }
});