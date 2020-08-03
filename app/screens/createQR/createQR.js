import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import MainContainer from '@components/mainContainer';
import InputComponent from '@components/inputComponent';
import QRComponent from '@components/qrComponent';
import PaletteColorsComponent from '@components/paletteColorsComponent';
import ButtonComponent from '@components/buttonComponent';
import { WidthDP } from '@constants/calculateSizes';
import TextStyle from '@generalsStyles/texts';
import Colors from '@constants/colors';
import { useDispatch } from 'react-redux';
import { On_CodeScannerMine } from '@connect/redux/actions/codes';

export default function CreateQR() {

    const dispatch = useDispatch();
    const [formState, SetFormState] = React.useState({ valueCodificate: '', color: Colors.default });
    const { valueCodificate, color } = formState;

    const ChangeValue = (value, position) => SetFormState({ ...formState, [position]: value });
    const SaveValue = () => dispatch(On_CodeScannerMine({ valueCodificate, color }));

    return <MainContainer>
        <ScrollView >
            <Text style={TextStyle.Title1}>Crea tu codigo QR</Text>
            <QRComponent valueCodificate={valueCodificate} color={color} />
            <View style={{ width: WidthDP(328) }} >
                <InputComponent
                    placeholder={'Escribe aqui ...'}
                    onChangeText={(value) => ChangeValue(value, 'valueCodificate')}
                    value={valueCodificate}
                    Title={'Valor que deseas codificar'}
                />
            </View>
            <PaletteColorsComponent onPress={(color) => ChangeValue(color, 'color')} />
            <ButtonComponent OnPress={() => SaveValue()} Label={'Guardar'} Disabled={valueCodificate ? false : true} />
        </ScrollView>
    </MainContainer>
}