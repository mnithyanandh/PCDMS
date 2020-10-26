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
    ImageBackground 
} from 'react-native';
import { Navigation, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
                            placeholder = 'Enter code here'
                            autoCapitalize = 'none'
                            onChangeText = {this.accessHandler}/>
                    </View>
                    <View>
                        <Button style={styles.auth_button}
                            title="Verify"
                            onPress={() => 
                                {
                                    if(this.access_code == "yes"){
                                        this.props.navigation.navigate('Verified')
                                    }
                                    else{
                                        this.props.navigation.navigate('Denied')
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

class Auth_Verified extends Component {
    render()
    {
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
};
class Auth_Denied extends Component {
    render()
    {
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
};

const AppNavigator = createStackNavigator(  
    {  
        Authentication: Auth_Screen,
        Verified: Auth_Verified,
        Denied: Auth_Denied    
    },  
    {  
        initialRouteName: "Authentication"  
    }  
);  

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
});

const AppContainer = createAppContainer(AppNavigator); 
export default class App extends Component {  
    render() {  
        return <AppContainer />;  
    }  
}  