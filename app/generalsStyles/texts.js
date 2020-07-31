import { StyleSheet } from 'react-native'
import { FontSizeRP, HeightDP } from '@constants/calculateSizes';
import Colors from '@constants/colors';

const TextStyle = StyleSheet.create({
    Title1: {
        marginTop: HeightDP(16),
        color: Colors.red,
        fontSize: FontSizeRP(26),
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    Title2: {
        marginTop: HeightDP(16),
        color: Colors.red,
        fontSize: FontSizeRP(20),
        fontWeight: 'normal'
    },
    Title3: {
        marginTop: HeightDP(16),
        color: Colors.white,
        fontSize: FontSizeRP(18),
        fontWeight: '900'
    },
    Body1: {
        marginTop: HeightDP(16),
        color: Colors.white,
        fontSize: FontSizeRP(16),
        fontWeight: '800'
    },
    Body2: {
        marginTop: HeightDP(16),
        color: Colors.white,
        fontSize: FontSizeRP(14),
        fontWeight: '700'
    },
});

export default TextStyle;