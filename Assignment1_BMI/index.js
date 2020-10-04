import {AppRegistry} from 'react-native';
import App from './Home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
console.ignoredYellowBox = ['Require cycle: node_modules/react-native-paper/src/components/'];