/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Index from './app/index';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Index);


// https://www.npmjs.com/package/jetifier
// First, use Android Studio's refactoring tool to convert your app re: the Android developer docs
// npm install --save-dev jetifier
// npx jetify
// npx react-native run-android (your app should correctly compile and work)
// Call npx jetify run in the postinstall target of your package.json (Any time your dependencies update you have to jetify again)
