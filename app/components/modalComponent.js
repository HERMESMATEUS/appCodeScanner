import React from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { HeightDP, WidthDP, FontSizeRP } from '@constants/calculateSizes';
import Colors from '@constants/colors';
import Images from '@constants/images';

export default function ModalComponent({ Show, Title, ValueCode, Close, Custom = false, DataJSX }) {
    return (
        Show ? <View style={{ justifyContent: 'center', alignItems: 'center', zIndex: 100, position: 'absolute', backgroundColor: 'rgba(0,0,0,0.9)', height: HeightDP(706), width: WidthDP(360) }} >
            <View style={{ justifyContent: 'center', paddingTop: HeightDP(16), paddingBottom: HeightDP(32), paddingHorizontal: WidthDP(16), backgroundColor: Colors.black_medium, borderRadius: HeightDP(10), width: WidthDP(340) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: WidthDP(320) }}>
                    <Text style={{ flex: 1, color: 'white', fontSize: FontSizeRP(16) }}>{Title}</Text>
                    <TouchableOpacity style={{ height: HeightDP(30), justifyContent: 'center', alignItems: 'center', marginRight: WidthDP(16), paddingHorizontal: WidthDP(8), }}
                        onPress={() => Close()}>
                        <Image style={{ width: WidthDP(18), height: HeightDP(18) }} resizeMode='stretch' source={Images.close} />
                    </TouchableOpacity>
                </View>
                {
                    Custom ?
                        DataJSX
                        :
                        <ScrollView>
                            <Text style={{ marginTop: HeightDP(15), color: 'white', fontSize: FontSizeRP(12) }}>{ValueCode}</Text>
                        </ScrollView>
                }

            </View>
        </View > :
            null
    )
}
