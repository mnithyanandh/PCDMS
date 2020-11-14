import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Auth_ScreenApp from './Authentication/Auth_screen';
import SearchApp from './Search_A_Patient/Search_Screen';
import Add_Screen from './Add_A_Patient/Add_Screen';
import ActivePatients_Screen from './Active_Patient_Cases/ActivePatients_Screen';
import { color } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Declare some global variables for storing the location of the background image:
var background = require('./background.png');

class Welcome_Screen extends Component {
    render(){
        return(
            <ImageBackground
                // Add info about the background picture:
                source = { background }
                style = {{ height: '100%', width: '100%'}}>
                <View style={styles.welcome_options_c}>
                    <Text style={styles.welcome_tag}>Welcome</Text>
                </View>
                <View style={styles.welcome_view}>
                    <Text style={styles.welcome_title}>
                        Patient Clinical Data Management System [PCDMS]
                    </Text>
                    <Text style={styles.welcome_action}>
                        From the below tabs, choose your preferred activity:{"\n"}
                        {"\n"}
                        <View style={styles.welcome_options_a}>
                            <Text style={{color: '#0119A0', textAlign: 'center', fontSize: 18}}> Access Home for Login and Help using <Icon name={'home'} size={25} color={'red'}/> icon.</Text>
                        </View>
                        <View style={styles.welcome_options_b}>
                            <Text style={{color: '#0119A0', textAlign: 'center', fontSize: 18}}>{"\n"} Search for a Patient using the <Icon name={'search'} size={25} color={'red'}/> icon.</Text>
                        </View>
                        <View style={styles.welcome_options_b}>
                            <Text style={{color: '#0119A0', textAlign: 'center', fontSize: 18}}>{"\n"} Add a new Patient using the <Icon name={'face'} size={25} color={'red'}/> icon.</Text>
                        </View>
                        <View style={styles.welcome_options_b}>
                            <Text style={{color: '#0119A0', textAlign: 'center', fontSize: 18}}>{"\n"} View Active Cases using the <Icon name={'visibility'} size={25} color={'red'}/> icon.</Text>
                        </View>
                    </Text>
                    <Button 
                        style = {styles.help}
                        color = "#000000"
                        title= "Help/Contact Us"
                        type = "outline"
                        raised = {true}>     
                    </Button>
                    <Button 
                        style = {styles.logout}
                        color = "#000000"
                        title = "Logout"
                        onPress={() => this.props.navigation.navigate('Authentication')}
                        type = "outline"
                        raised = {true}>     
                    </Button>
                </View>
            </ImageBackground>
        )
    }
};
const BtTab=createMaterialBottomTabNavigator(
    {
        Home:{screen:Welcome_Screen, navigationOptions: {
            tabBarLabel: 'Home',
            justifyContent: 'center',
            fontSize: 30,
            alignItems: 'center',
            activeColor: '#ffffff',
            inactiveColor: '#000000',
            barStyle: {backgroundColor: '#3948fc'},
            tabBarIcon:()=>(
                <View>
                    <Icon name={'home'} size={26} fontWeight={'bold'} color={'white'}/>
                </View>
            )
            }
        },
        Search:{screen:SearchApp, navigationOptions: {
            tabBarLabel: 'Search Patient',
            justifyContent: 'center',
            fontSize: 30,
            alignItems: 'center',
            activeColor: '#ffffff',
            inactiveColor: '#000000',
            barStyle: {backgroundColor: '#3948fc'},
            tabBarIcon:()=>(
                <View>
                    <Icon name={'search'} size={26} fontWeight={'bold'} color={'white'}/>
                </View>
            )
            }
        },
        Add:{screen:Add_Screen, navigationOptions: {
            tabBarLabel: 'Add New Patient',
            justifyContent: 'center',
            fontSize: 30,
            alignItems: 'center',
            activeColor: '#ffffff',
            inactiveColor: '#000000',
            barStyle: {backgroundColor: '#3948fc'},
            tabBarIcon:()=>(
                <View>
                    <Icon name={'face'} size={26} fontWeight={'bold'} color={'white'}/>
                </View>
            )
            }
        },
        Active_Patients:{screen:ActivePatients_Screen, navigationOptions: {
            tabBarLabel: 'Active Cases',
            justifyContent: 'center',
            fontSize: 30,
            alignItems: 'center',
            activeColor: '#ffffff',
            inactiveColor: '#000000',
            barStyle: {backgroundColor: '#3948fc'},
            tabBarIcon:()=>(
                <View>
                    <Icon name={'visibility'} size={26} fontWeight={'bold'} color={'white'}/>
                </View>
            )
            }
        }
    }
);

const styles = StyleSheet.create({
    
    welcome_view: {
        flex: 0.9,
        justifyContent: 'space-around', 
        alignItems: 'center'
    },
    welcome_tag: {
        marginTop: 50,
        fontSize: 50,
        color: 'red',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
    },
    welcome_title: {
        fontSize: 25,
        color: 'black', 
        fontWeight: 'bold', 
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    welcome_action: {
        fontSize: 22, 
        fontWeight: '600', 
        color: '#000B4C',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    welcome_options_a: {
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        paddingTop: 10,
        paddingLeft: 5,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        alignContent: 'center'
    },
    welcome_options_b: {
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        paddingLeft: 40,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        alignContent: 'center'
    },
    welcome_options_c: {
        marginTop: 50,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignContent: 'center'
    },
    help: {
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logout: {
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const BtTabContainer = createAppContainer(BtTab);
export default BtTabContainer
