/**
 * @format
 */
import {Buffer} from 'buffer';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import {TextDecoder, TextEncoder} from 'text-encoding';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Mock event listener functions to prevent them from fataling.
window.addEventListener = () => {};
window.removeEventListener = () => {};
window.Buffer = Buffer;

// @walletconnect/sign-client needs these - provided here directly instead
// of via @walletconnect/react-native-compat, whose bundled native
// WalletConnect-Pay module (unused - we only need basic session/sign) pulls
// in a JNA version that fails to dex against this project's older Android
// toolchain.
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}

AppRegistry.registerComponent(appName, () => App);
