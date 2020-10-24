import React, {Component} from 'react';
import { 
    View,
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity,
    ImageBackground 
} from 'react-native';

// Declare some global variables for storing the location of the background image:
var background = require('../background.png');

class View_Patient extends Component {
    render()
    {
        return(
            <ImageBackground
                source={ background }
                style={{height: '100%',width: '100%'}}>
                    <View style={styles.view_tag}>
                        <Text style={styles.view_render_text}>Patient Records</Text>
                    </View>
            </ImageBackground>
        );
    }
};
const styles = StyleSheet.create({  
    view_tag: {
        marginTop: 70,
        fontSize: 50,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    view_render_text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
});
export default View_Patient