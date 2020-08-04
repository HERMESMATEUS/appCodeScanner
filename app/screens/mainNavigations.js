import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '@constants/colors';
import { HeightDP, WidthDP } from '@constants/calculateSizes';
import Images from '@constants/images';
import ScannedCodes from './scannedCodes/scannedCodes';
import CreateQR from './createQR/createQR';
import ScannerQR from './scannerQR/scannerQR';
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-community/async-storage';
import { On_ALLCodeScannerOthers, On_ALLCodeScannerMine } from '@connect/redux/actions/codes';
import { useDispatch } from 'react-redux';


const Tab = createBottomTabNavigator();

export default function Navigations() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        async function validatePreData() {
            let CodeScannerMine = await AsyncStorage.getItem('CodeScannerMine');
            if (CodeScannerMine) dispatch(On_ALLCodeScannerMine(JSON.parse(CodeScannerMine)))
            let CodesScannerOthers = await AsyncStorage.getItem('CodesScannerOthers');
            if (CodesScannerOthers) dispatch(On_ALLCodeScannerOthers(JSON.parse(CodesScannerOthers)))
            SplashScreen.hide();
        }
        validatePreData()
    }, [])

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="ScannedCodes"
                lazy={true}
                tabBarOptions={{
                    showLabel: false,
                    showIcon: true,
                    style: {
                        backgroundColor: Colors.black_medium,
                        height: HeightDP(46)
                    }
                }}
            >
                <Tab.Screen name="ScannedCodes" component={ScannedCodes} options={{ tabBarIcon: ({ focused }) => SelectImage('folderWhite', 24, 24, focused ? 1 : 0.3) }} />
                <Tab.Screen name="CreateQR" component={CreateQR} options={{ tabBarIcon: ({ focused }) => SelectImage('qrWhite', 24, 24, focused ? 1 : 0.3) }} />
                <Tab.Screen name="ScannerQR" component={ScannerQR} options={{ tabBarIcon: ({ focused }) => SelectImage('qrScannerWhite', 24, 24, focused ? 1 : 0.3) }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function SelectImage(SrcImage, width, height, opacity) {
    return <Image resizeMode='contain' source={Images[SrcImage]} style={{ opacity: opacity, height: HeightDP(height), width: WidthDP(width), }} />
}