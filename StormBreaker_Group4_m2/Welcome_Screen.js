import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Search_Screen from './Search_A_Patient/Search_Screen';
import Add_Screen from './Add_A_Patient/Add_Screen';
import ActivePatients_Screen from './Active_Patient_Cases/ActivePatients_Screen';

class Welcome_Screen extends Component {
    render()
    {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>Patient Clinical Data Management System</Text>
                <Text style={{fontSize: 15, color: 'red', alignItems: 'center', justifyContent: 'center', padding: 15}}>WELCOME</Text>
            </View>
        );
    }
}
const BtTab=createMaterialBottomTabNavigator(
    {
        Search:{screen:Search_Screen, navigationOptions: {
            tabBarLabel: 'Search A Patient',
            justifyContent: 'center',
            fontSize: 25,
            alignItems: 'center',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: {backgroundColor: '#67baf6'},
            tabBarIcon:()=>(
                <View>
                    <Icon name={'search'} size={25} fontWeight={'bold'}/>
                </View>
            )
            }
        },
        Add:{screen:Add_Screen, navigationOptions: {
            tabBarLabel: 'Add New Patient',
            justifyContent: 'center',
            fontSize: 25,
            alignItems: 'center',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: {backgroundColor: '#67baf6'},
            tabBarIcon:()=>(
                <View>
                    <Icon name={'face'} size={25} fontWeight={'bold'}/>
                </View>
            )
            }
        },
        Active_Patients:{screen:ActivePatients_Screen, navigationOptions: {
            tabBarLabel: 'View Active Cases',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: {backgroundColor: '#67baf6'},
            tabBarIcon:()=>(
                <View>
                    <Icon name={'visibility'} size={25} fontWeight={'bold'}/>
                </View>
            )
            }
        }
    }
);
export default createAppContainer(BtTab);