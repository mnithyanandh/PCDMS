import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default class Home extends Component {
    render()
    {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'red'}}>BMI Calculator Home Screen</Text>
            </View>
        );
    }
}