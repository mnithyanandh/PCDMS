import React, { Component } from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    StyleSheet } from 'react-native';

export default class CheckBox extends Component {
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
                            <Text style={styles.checkBoxText}>{res.text}</Text>
                            <TouchableOpacity
                                style={styles.checkBox}
                                onPress={() => {
                                    if(value == null){
                                        this.setState({
                                            value: res.key
                                        });
                                    }
                                    else{
                                        this.setState({
                                            value: null
                                        });
                                    }
                                }}>
                                    {
                                    value == res.key && 
                                    <View style={styles.selectedCheckBox} />
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
    checkBoxText: {
        fontSize: 15,
        color: '#000',
        fontWeight: '700'
    },
	checkBox: {
		height: 20,
        width: 20,
        marginLeft: 5,
        marginRight: 10,
		borderWidth: 2,
		borderColor: '#3740ff',
        alignItems: 'center',
        justifyContent: 'center'
	},
	selectedCheckBox: {
		width: 10,
		height: 10,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});

