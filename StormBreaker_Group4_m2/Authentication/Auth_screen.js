import React, {Component} from 'react';
import { 
    View,
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity,
    ImageBackground 
} from 'react-native';

// Declare some global variables for storing the location of the background image:
var background = require('../background.png');
var logo_icon = require('./712_logo.png');

class Auth_Screen extends Component {
    render()
    {
        return(
            <ImageBackground
                source={ background }
                style={{height: '100%',width: '100%'}}>
                    <View style={styles.auth_tag}>
                        <Text style={styles.auth_render_text}>User Authentication</Text>
                    </View>
                    <View>
                        <Text style={styles.auth_enter_txtfield}>User Authentication</Text>
                    </View>
                    <View>
                        <TextInput style = {styles.auth_input}
                            underlineColorAndroid = 'transparent'
                            placeholder = 'Enter your personal access code here'
                            autoCapitalize = 'none'
                            /* onChangeText = {} *//>
                    </View>
            </ImageBackground>
        );
    }
};
const styles = StyleSheet.create({  
    auth_tag: {
        marginTop: 70,
        fontSize: 50,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    auth_render_text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    auth_enter_txtfield: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    auth_input: {
        margin: 15,
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
});
export default Auth_Screen