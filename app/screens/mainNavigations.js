import React from 'react';
import { Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainContainer from '@components/mainContainer';
import Colors from '@constants/colors';
import { HeightDP, WidthDP } from '@constants/calculateSizes';
import Images from '@constants/images';

import CreateQR from './createQR/createQR';
import ScannerQR from './scannerQR/scannerQR';

const Tab = createBottomTabNavigator();

export default function Navigations() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
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
                <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => SelectImage('folderWhite', 24, 24, focused ? 1 : 0.3) }} />
                <Tab.Screen name="CreateQR" component={CreateQR} options={{ tabBarIcon: ({ focused }) => SelectImage('qrWhite', 24, 24, focused ? 1 : 0.3) }} />
                <Tab.Screen name="ScannerQR" component={ScannerQR} options={{ tabBarIcon: ({ focused }) => SelectImage('qrScannerWhite', 24, 24, focused ? 1 : 0.3) }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function SelectImage(SrcImage, width, height, opacity) {
    return <Image resizeMode='contain' source={Images[SrcImage]} style={{ opacity: opacity, height: HeightDP(height), width: WidthDP(width), }} />
}


function HomeScreen() {
    return (
        <MainContainer >
            <Text style={{ color: 'white' }}>Home!</Text>
        </MainContainer>
    );
}