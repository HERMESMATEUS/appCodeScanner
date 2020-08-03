import React from 'react'
import { Text } from 'react-native';
import MainContainer from '@components/mainContainer';
import TabsComponent from '@components/tabsComponent';
import ModalComponent from '@components/modalComponent';
import TextStyle from '@generalsStyles/texts';
import { useSelector } from 'react-redux';
import QRComponent from '@components/qrComponent';

export default function ScannedCodes() {

    const { CodesScannerMine, CodesScannerOthers } = useSelector(state => state.codes);
    const [option, SetOption] = React.useState(1);
    const [generateCode, setGenerateCode] = React.useState({ Show: false, DataCode: {} });

    const { Show, DataCode } = generateCode;

    return (
        <MainContainer >
            <Text style={TextStyle.Title1}>Codigos Creados y Escaneados</Text>

            <TabsComponent
                SetOption={(position) => SetOption(position)}
                Navigation={(item) => setGenerateCode({ DataCode: item, Show: true, })}
                Option={option}
                Text1={'Codigos Creados'}
                Text2={'Codigos Escaneados'}
                DataOption1={CodesScannerMine}
                DataOption2={CodesScannerOthers}
            />

            <ModalComponent
                Show={Show}
                Title={'Codigo'}
                Custom={true}
                Close={() => { }}
                Close={() => setGenerateCode({ Show: false, DataCode: {} })}
                DataJSX={<QRComponent valueCodificate={DataCode.valueCodificate} color={DataCode.color} />}
            />

        </MainContainer>
    );
}