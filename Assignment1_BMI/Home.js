import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';
import { createBottomTabNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

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
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: {backgroundColor: '#67baf6'},
            tabBarIcon:()=>(
                <View>
                    <Icon name={'home'} size={25} style={{color: '#ff0000'}}/>
                </View>
            )}
        },
        Standard:{screen:Standard, navigationOptions: {
            tabBarLabel: 'Standard Meassurement',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: {backgroundColor: '#67baf6'},
            tabBarIcon:()=>(
                <View>
                    <Icon name={'standard measurement'} size={25} style={{color: '#ff0000'}}/>
                </View>
            )}
        },
        Metric:{screen:Metric, navigationOptions: {
            tabBarLabel: 'Metric Measurement',
            activeColor: '#ff0000',
            inactiveColor: '#000000',
            barStyle: {backgroundColor: '#67baf6'},
            tabBarIcon:()=>(
                <View>
                    <Icon name={'Metric measurement'} size={25} style={{color: '#ff0000'}}/>
                </View>
            )}
        }
    }
);
export default createAppContainer(BtTab);