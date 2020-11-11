import React, {useEffect} from 'react';
import { 
    View,
    Text, 
    ActivityIndicator,
    ImageBackground, 
    StyleSheet
} from 'react-native';
var background = require('../background.png');

function Auth_Denied({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Authentication');
        }, 2500);
    }, )
    return(
        <ImageBackground
            source={ background }
            style={{height: '100%',width: '100%'}}>
                <View style = {styles.auth_denied_logo}>
                <ActivityIndicator
                    // Add info about the spinner:
                    size = "large"
                    color = "black"
                    animating = 'true'>
                    </ActivityIndicator>
                </View>
                <View style={styles.auth_denied_tag}>
                    <Text style={styles.auth_denied_render_text}>Access denied, try again!</Text>
                </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    auth_denied_logo: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    auth_denied_tag: {
        marginTop: 70,
        fontSize: 50,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    auth_denied_render_text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
})
export default Auth_Denied
