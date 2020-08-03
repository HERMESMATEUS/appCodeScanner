import React from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Colors from '@constants/colors';
import { HeightDP, FontSizeRP, WidthDP } from '@constants/calculateSizes';

export default function TabsComponent({ SetOption, Navigation, Option, Text1, Text2, DataOption1, DataOption2 }) {
    return (
        <View style={{ marginTop: HeightDP(20) }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => SetOption(1)} style={{ alignItems: 'center', justifyContent: 'center', width: WidthDP(164), height: HeightDP(60), borderBottomWidth: HeightDP(1), borderColor: Option == 1 ? Colors.red : Colors.black }} >
                    <Text style={{ fontWeight: 'bold', color: Colors.red, fontSize: FontSizeRP(16) }}>{Text1}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => SetOption(2)} style={{ alignItems: 'center', justifyContent: 'center', width: WidthDP(164), height: HeightDP(60), borderBottomWidth: HeightDP(1), borderColor: Option == 2 ? Colors.red : Colors.black }} >
                    <Text style={{ fontWeight: 'bold', color: Colors.red, fontSize: FontSizeRP(16) }}>{Text2}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginTop: HeightDP(20), marginBottom: HeightDP(10) }}>
                <ScrollView style={{}}>
                    <View style={{ borderRadius: HeightDP(8), backgroundColor: Colors.black_low, paddingVertical: HeightDP(10), paddingHorizontal: WidthDP(10), width: WidthDP(328), alignItems: 'center' }}>
                        {
                            Option == 1 ?
                                DataOption1.length > 0 ?
                                    DataOption1.map((item) => <Item
                                        valueCodificate={item.valueCodificate}
                                        color={item.color}
                                        item={item}
                                        Navigation={Navigation}
                                    />)
                                    : <NotFound Label='guardados' />
                                :
                                DataOption2.length > 0 ?
                                    DataOption2.map((item) => <Item
                                        valueCodificate={item.valueCodificate}
                                        color={item.color}
                                        item={item}
                                        Navigation={Navigation}
                                    />)
                                    : <NotFound Label='escaneados' />
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const Item = ({ valueCodificate, color, Navigation, item }) => (
    <View style={{ marginTop: HeightDP(10), flexDirection: 'row', paddingBottom: HeightDP(2), borderBottomWidth: HeightDP(0.5), borderColor: Colors.black }}>
        <View style={{ justifyContent: 'center', flex: 2 }}>
            <Text style={{ color: Colors.white }} numberOfLines={2} ellipsizeMode='tail'>{valueCodificate}</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <View style={{ borderRadius: HeightDP(12), height: HeightDP(24), width: WidthDP(24), backgroundColor: color }} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <TouchableOpacity onPress={() => Navigation(item)} style={{ height: HeightDP(24), width: WidthDP(80), justifyContent: 'center', alignItems: 'center', borderRadius: HeightDP(4), backgroundColor: Colors.red }} >
                <Text style={{ fontWeight: 'bold', color: Colors.white }}>Codificar</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const NotFound = ({ Label }) => <View style={{ justifyContent: 'center', alignItems: 'center', height: HeightDP(60), width: WidthDP(220) }}>
    <Text style={{ textAlign: 'center', color: Colors.white }}> No se encuentran codigos {Label} </Text>
</View>