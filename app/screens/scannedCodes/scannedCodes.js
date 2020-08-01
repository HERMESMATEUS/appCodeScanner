import React from 'react'
import { Text } from 'react-native';
import MainContainer from '@components/mainContainer';
import TextStyle from '@generalsStyles/texts';

export default function ScannedCodes() {
    return (
        <MainContainer >
            <Text style={TextStyle.Title1}>Codigos Creados y Escaneados</Text>
        </MainContainer>
    );
}