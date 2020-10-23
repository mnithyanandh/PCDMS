import React, {Component} from 'react';
import { 
    View, 
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity, 
    BackHandler,
    ImageBackground} from 'react-native';
import { Icon } from 'react-native-elements';
import { Navigation } from 'react-navigation';

// Declare some global variables for storing the location of the background image:
var background = require('../background.png');

class Search_Screen extends Component {
    render()
    {
        return(
            <ImageBackground
                source = { background }
                style = {styles.search_bg}>
                <View style={styles.search_render}>
                    <Text style={styles.search_render_text}>Search For a Patient</Text>
                </View>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    search_bg:{ 
        height: '100%',
        width: '100%'
    }, 
    search_render: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    search_render_text: {
        fontSize: 30,
        fontWeight: 'bold'
    },
});
export default Search_Screen