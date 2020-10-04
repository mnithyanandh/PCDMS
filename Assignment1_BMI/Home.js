import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Metric from './Metric';
import Standard from './Standard';

class Home extends Component {
    render()
    {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'red'}}>BMI Calculator Home Screen</Text>
            </View>
        );
    }
}

const BtTab=createMaterialBottomTabNavigator(
    {
        Home:{screen:Home, navigationOptions: {
            tabBarLabel: 'Home',
            justifyContent: 'center',
            fontSize: 25,
            alignItems: 'center',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: {backgroundColor: '#67baf6'},
            tabBarIcon:()=>(
                <View>
                    <Icon name={'home'} size={25} style={{color: '#ff0000'}}/>
                </View>
            )
            }
        },
        Standard:{screen:Standard, navigationOptions: {
            tabBarLabel: 'Imperial Meassurement',
            justifyContent: 'center',
            alignItems: 'center',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: {backgroundColor: '#67baf6'},
            tabBarIcon:()=>(
                <View>
                    <Text style={{fontSize: 20, color: '#ff0000'}}>BI</Text>
                </View>
            )
            }
        },
        Metric:{screen:Metric, navigationOptions: {
            tabBarLabel: 'Metric Measurement',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: {backgroundColor: '#67baf6'},
            tabBarIcon:()=>(
                <View>
                    <Text style={{fontSize: 20, color: '#ff0000'}}>SI</Text>
                </View>
            )
            }
        }
    }
);
export default createAppContainer(BtTab);