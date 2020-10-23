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

class ActivePatients_Screen extends Component {
    render()
    {
        return(
            <ImageBackground
                source={ background }
                style={{height: '100%',width: '100%'}}>
                    <View style={styles.active_render}>
                        <Text style={styles.active_render_text}>View Active Cases</Text>
                    </View>
            </ImageBackground>
        );
    }
};
const styles = StyleSheet.create({  
    active_render: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    active_render_text: {
        fontSize: 30,
        fontWeight: 'bold'
    },
});
export default ActivePatients_Screen