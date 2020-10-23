import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

// Declare some global variables for storing the location of the background image:
var background = require('../background.png');

class Add_Screen extends Component {
    render()
    {
        return(
            <ImageBackground
                source={ background }
                style={{height: '100%',width: '100%'}}>
                <View style={styles.add_render}>
                    <Text style={styles.add_render_text}>Add a New Patient</Text>
                </View>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    add_render: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    add_render_text: {
        fontSize: 30,
        fontWeight: 'bold'
    },
});


{/* <Toolbar>
    <ToolbarBackAction
        onPress={this._goBack}/>
    <ToolbarContent
        title="Title"
        subtitle="Subtitle"/>
    <ToolbarAction icon="search" onPress={this._onSearch} />
    <ToolbarAction icon="more-vert" onPress={this._onMore} />
</Toolbar> */}

export default Add_Screen