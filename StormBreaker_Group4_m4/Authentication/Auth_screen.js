import React, {Component} from 'react';
import { 
    View,
    Text, 
    StyleSheet, 
    TextInput, 
    Image,
    ImageBackground,
    Alert 
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import RNExitApp from 'react-native-exit-app';

// Declare some global variables for storing the location of the background image:
var background = require('../background.png');
var logo_icon = require('../712_logo.png');

class Auth_Screen extends Component {
    // Declare a states for Access Code input from user  
    state={
        access_code: '',
        pass_code: []
    }

    accessHandler=(text)=>{
        this.setState({ 
            access_code: text 
        })
    }

    clearText = () => {
        this.setState({text: ''})
    }

    fetchData=()=>{
        const url = 'https://wecare-heroku.herokuapp.com/accesscode'
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    pass_code: data
                })
            })
            .catch((error) => {
            console.log(error)
            .done();
        });
    }

    componentDidMount(){
        this.fetchData();
        this.clearText();
    }

    render()
    {
        const codes = this.state.pass_code.some((val) => {
            return val.accessCode === this.state.access_code;
        });

        return(
            <ImageBackground
                source={ background }
                style={{height: '100%',width: '100%'}}>
                    <View style={styles.auth_tag}>
                        <Text style={styles.auth_render_text}>User Authentication</Text>
                    </View>
                    <View style = {styles.auth_logo}>
                        <Image source = {logo_icon}
                        style = {{alignContent: 'center', height: '100%', width: '100%'}}/>
                    </View>
                    <View>
                        <Text style={styles.auth_enter_txtfield}>Enter personal access code:</Text>
                    </View>
                    <View>
                        <TextInput style = {styles.auth_input}
                            underlineColorAndroid = 'transparent'
                            placeholder = 'Enter code here:'
                            autoCapitalize = 'none'
                            clearTextOnFocus= {true}
                            onChangeText= {this.accessHandler}
                            />
                    </View>
                    <View style = {styles.button_view}>
                        <Button style={styles.auth_button}
                            title="Verify"
                            color = "#000000"
                            onPress={() => 
                                {
                                    Alert.alert(
                                        "Are you sure you want to proceed?",
                                        "Invalid/Incorrect attempts will be logged by Admin",
                                        [
                                            {
                                                text: "Cancel",
                                                onPress: () => this.clearText,
                                                style: "cancel"
                                            },
                                            {
                                                text: "OK",
                                                onPress: () => 
                                                {
                                                    
                                                    if(codes == true){
                                                        this.props.navigation.navigate('AVuthentication')
                                                        
                                                    }
                                                    else if(codes == false){
                                                        this.props.navigation.navigate('ADthentication')
                                                        
                                                    }
                                                    else if(codes != true && codes != false){
                                                        Alert.alert(
                                                            "Invalid entry detected!",
                                                            "Kindly retry your access code",
                                                            [
                                                                {
                                                                    text: "OK",
                                                                    onPress: () => {this.clearText},
                                                                    style: "Ok"
                                                                },
                                                            ],
                                                        );
                                                    }
                                                    else {
                                                        Alert.alert(
                                                            "No entry detected!",
                                                            "Kindly enter an access code",
                                                            [
                                                                {
                                                                text: "OK",
                                                                onPress: () => console.log("Cancel Pressed"),
                                                                style: "cancel"
                                                                }
                                                            ],
                                                        );
                                                    }
                                                    this.clearText
                                                },
                                                style: "cancel"
                                            },
                                        ],
                                    );
                                }}
                            borderColor="#000000"
                            raised = {true}/>
                    </View>
                    <View style = {styles.button_view}>
                        <Button 
                            style = {styles.logout}
                            title = "Quit"
                            onPress={() => RNExitApp.exitApp()}
                            bordercolor = "#000000"
                            raised = {true}>     
                        </Button>
                    </View>
            </ImageBackground>
        );
    }
};
const styles = StyleSheet.create({  
    button_view: {
        marginTop: 20,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    auth_tag: {
        marginTop: 130,
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
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    auth_button: {
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    button_container: {
        backgroundColor: '#ecf0f1',
    },
    logout: {
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    }
}); 
export default Auth_Screen