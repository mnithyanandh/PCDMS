import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

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
                <View style = {styles.add_patient_name_area}>
                    <Text style = {styles.add_patient_name}>Name:</Text>
                    <TextInput style = {styles.add_patient_first_name}
                    underlineColorAndroid = 'transparent'
                    placeholder = 'First Name'
                    autoCapitalize = 'none'/>
                    <TextInput style = {styles.add_patient_last_name}
                    underlineColorAndroid = 'transparent'
                    placeholder = 'Last Name'
                    autoCapitalize = 'none'/>
                </View>
                <View style = {styles.add_patient_DOB_A_area}>
                    <Text style = {styles.add_patient_DOB}>DOB:</Text>
                    <TextInput style = {styles.add_patient_DOB_MM}
                    underlineColorAndroid = 'transparent'
                    placeholder = 'MM'
                    autoCapitalize = 'none'/>
                    <TextInput style = {styles.add_patient_DOB_DD}
                    underlineColorAndroid = 'transparent'
                    placeholder = 'DD'
                    autoCapitalize = 'none'/>
                    <TextInput style = {styles.add_patient_DOB_YYYY}
                    underlineColorAndroid = 'transparent'
                    placeholder = 'YYYY'
                    autoCapitalize = 'none'/>
                    <Text style = {styles.add_patient_DOA}>DOA:</Text>
                    <TextInput style = {styles.add_patient_DOA_Date}
                    underlineColorAndroid = 'transparent'
                    placeholder = 'Date'
                    autoCapitalize = 'none'/>
                </View>
                <View style = {styles.add_patient_Gender_area}>
                    <Text style = {styles.add_patient_Gender}>Gender:</Text>
                    <TextInput style = {styles.add_patient_Gender_sex}
                    underlineColorAndroid = 'transparent'
                    placeholder = 'Sex'
                    autoCapitalize = 'none'/>
                </View>
                <View style = {styles.add_patient_Address_area}>
                    <Text style = {styles.add_patient_Gender}>Address:</Text>
                    <View style = {styles.add_patient_Address_Line_area}>
                        <TextInput style = {styles.add_patient_Address_Line_entry_1}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Line 1'
                        autoCapitalize = 'none'/>
                        <TextInput style = {styles.add_patient_Address_Line_entry_2}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Line 2'
                        autoCapitalize = 'none'/>
                        <View style = {styles.add_patient_Address_Province_area}>
                        <TextInput style = {styles.add_patient_Address_City_entry}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'City'
                        autoCapitalize = 'none'/>
                        <TextInput style = {styles.add_patient_Address_Province_entry}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Province'
                        autoCapitalize = 'none'/>

                        </View>
                        
                    </View>
                </View>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    add_render: {
        marginTop: 50,
        fontSize: 40,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    add_render_text: {
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    add_patient_name_area: {
        height: 50,
        width: 400,
        marginTop: 10,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    add_patient_name: {
        fontSize: 20,
        marginLeft: 20,
        marginRight: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_first_name: {
        margin: 15,
        height: 40,
        width: 150,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_last_name: {
        margin: 15,
        height: 40,
        width: 150,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_DOB_A_area: {
        height: 50,
        width: 400,
        marginTop: 10,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    add_patient_DOB: {
        fontSize: 20,
        marginLeft: 20,
        marginRight: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_DOB_MM: {
        margin: 15,
        height: 40,
        width: 50,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_DOB_DD: {
        margin: 15,
        height: 40,
        width: 50,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_DOB_YYYY: {
        margin: 15,
        height: 40,
        width: 60,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_DOA: {
        fontSize: 20,
        marginLeft: 20,
        marginRight: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_DOA_Date: {
        margin: 15,
        height: 40,
        width: 100,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_Gender_area: {
        height: 50,
        width: 400,
        marginTop: 10,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    add_patient_Gender: {
        fontSize: 20,
        marginLeft: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_Gender_sex: {
        margin: 15,
        height: 40,
        width: 250,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_Address_area: {
        height: 50,
        width: 400,
        marginTop: 10,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    add_patient_Address_Line_area: {
        height: 120,
        width: 400,
        marginTop: 90,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'column',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    add_patient_Address_Line_entry_1: {
        margin: 15,
        height: 40,
        marginBottom: 30,
        width: 250,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_Address_Line_entry_2: {
        margin: 15,
        height: 40,
        width: 250,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_Address_City_entry:{
        marginTop: 50,
        height: 40,
        width: 150,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_Address_Province_area: {
        height: 50,
        width: 210,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    add_patient_Address_Province_entry:{
        marginTop: 50,
        height: 40,
        width: 80,
        borderWidth: 1,
        padding: 10,
    },


})


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