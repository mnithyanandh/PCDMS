import React, {Component, useEffect} from 'react';
import { 
    View,
    Text, 
    ActivityIndicator,
    StyleSheet,
    ImageBackground 
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import WelcomeApp from '../Welcome_Screen';

var background = require('../background.png');

function Auth_Verified({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 2500);
    }, )
    return(
        <ImageBackground
            source={ background }
            style={{height: '100%',width: '100%'}}>
                <View style={styles.auth_verified_logo}>
                <ActivityIndicator
                    // Add info about the spinner:
                    size = "large"
                    color = "black"
                    animating = 'true'>
                    </ActivityIndicator>
                </View>
                <View style={styles.auth_verified_tag}>
                    <Text style={styles.auth_verified_render_text}>Access Verified. Logging you in...</Text>
                </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    auth_verified_tag: {
        marginTop: 70,
        fontSize: 50,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    auth_verified_render_text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    auth_verified_logo: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
const AppNavigator = createStackNavigator(  
    {  
        Verified: Auth_Verified,
        'Home': WelcomeApp
    },  
    {  
        initialRouteName: "Verified"  
    }  
); 
const AppContainer = createAppContainer(AppNavigator); 
class Auth_VerifiedApp extends Component {  
    render() {  
        return <AppContainer />;  
    }  
} 
export default Auth_Verified