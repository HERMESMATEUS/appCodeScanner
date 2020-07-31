import React, { Component } from 'react'
import QRCode from "react-native-qrcode-svg";

export default function Qrexample() {
    return <QRCode
        value="some string value"
        color={"#2C8DDB"}
        backgroundColor={"white"}
        size={100}
        // logo = { require('../../../embed_logo_file_path') } // or logo={{uri: base64logo}}
        logoMargin={2}
        logoSize={20}
        logoBorderRadius={10}
        logoBackgroundColor={"transparent"}
    />
}
