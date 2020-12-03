import React, { Component } from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    StyleSheet } from 'react-native';

    export default class RadioButton extends Component {
	state = {
		value: null,
    };
    
    render() {
        const { user_selection } = this.props;
        const { value } = this.state;
    
        return (
            <View style = {styles.row_container}>
                {user_selection.map(res => {
                    return (
                        <View key={res.key} style={styles.button_container}>
                            <Text style={styles.radioText}>{res.text}</Text>
                            <TouchableOpacity
                                style={styles.radioCircle}
                                onPress={() => {
                                    this.setState({
                                        value: res.key
                                    });
                                    console.log(this.state.value);
                                }}>
                                  {
                                  value == res.key && 
                                  <View style={styles.selectedRb} />
                                  }
                            </TouchableOpacity>
                        </View>
                    );
                })}
                {/* <Text> Selected: {this.state.value} </Text> */}
            </View>
        );
    }
};
const styles = StyleSheet.create({
    button_container: {
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    row_container: {
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-around',
	},
    radioText: {
        fontSize: 15,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 20,
        width: 20,
        marginLeft: 5,
        marginRight: 10,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
        alignItems: 'center',
        justifyContent: 'center'
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});

