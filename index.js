import { registerRootComponent } from 'expo';

import App from './App';
import PushNotification from "react-native-push-notification";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    },

    requestPermissions: Platform.OS === 'ios'
});