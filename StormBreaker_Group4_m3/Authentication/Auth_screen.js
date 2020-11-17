import React, {Component} from 'react';
import { 
    View,
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity,
    Button,
    Image,
    ActivityIndicator,
    ImageBackground,
    Alert 
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Auth_VerifiedApp from './Auth_verified';
import Auth_Denied from './Auth_denied';

// Declare some global variables for storing the location of the background image:
var background = require('../background.png');
var logo_icon = require('../712_logo.png');

class Auth_Screen extends Component {
    // Declare a states for Access Code input from user  
    state={
        access_code: ''
    }
    accessHandler=(text)=>{
        this.setState({ access_code: text })
    }
    render(access_code)
    {
        return(
            <ImageBackground
                source={ background }
                style={{height: '100%',width: '100%'}}>
                    <View style={styles.auth_tag}>
                        <Text style={styles.auth_render_text}>User Authentication</Text>
                    </View>
                    <View>
                        <Text style={styles.auth_enter_txtfield}>Enter personal access code:</Text>
                    </View>
                    <View>
                        <TextInput style = {styles.auth_input}
                            underlineColorAndroid = 'transparent'
                            placeholder = 'Enter code here:'
                            autoCapitalize = 'none'
                            onChangeText = {this.accessHandler}/>
                    </View>
                    <View>
                        <Button style={styles.auth_button}
                            title="Verify"
                            onPress={() => 
                                {
                                    if(this.state.access_code.text = "yes"){
                                        this.props.navigation.navigate('AVuthentication')
                                    }
                                    else if(this.state.access_code.text == "no"){
                                        this.props.navigation.navigate('ADthentication')
                                    }
                                    else {
                                        Alert.alert(
                                            "No entry detected!",
                                            "Kindly retry your access code",
                                            [
                                                {
                                                text: "Cancel",
                                                onPress: () => console.log("Cancel Pressed"),
                                                style: "cancel"
                                                },
                                                {
                                                text: "OK",
                                                onPress: password => console.log("OK Pressed, password: " + password)
                                                }
                                            ],
                                        );
                                    }
                                }}
                            borderColor="#000000"
                            type = "outline"
                            raised = {true}/>
                    </View>
                    <View style = {styles.auth_logo}>
                        <Image source = {logo_icon}
                        style = {{marginTop: 100, alignContent: 'center', height: '100%', width: '70%'}}/>
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
        marginTop: 80,
        justifyContent: 'center',
        color: '#0022E1',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    auth_input: {
        margin: 15,
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    auth_logo: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    auth_button: {
        position: 'absolute',
        top: 20,
        left: 40
    },
    button_container: {
        backgroundColor: '#ecf0f1'
    },
}); 
export default Auth_Screen