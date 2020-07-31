
import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "@connect/redux/index"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigations from './screens/mainNavigations';

export default class Index extends Component {
    render() {
        return <Provider store={store}>
            <SafeAreaProvider style={{ flex: 1 }}>
                <Navigations />
            </SafeAreaProvider>
        </Provider>;
    }
};