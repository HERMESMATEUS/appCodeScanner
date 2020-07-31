import React from 'react'
import { Text } from 'react-native'
import Colors from '@constants/colors';
import { HeightDP } from '@constants/calculateSizes';
const WaterMark = () => (<Text style={{ marginTop: HeightDP(10), color: Colors.blueWaterMark, fontSize: HeightDP(12), fontWeight: 'bold' }}> By Mathus/Matheus-Developer </Text>);
export default WaterMark;