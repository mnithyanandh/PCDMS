import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class Search_Screen extends Component {
    render()
    {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Search A Patient</Text>
            </View>
        );
    }
}