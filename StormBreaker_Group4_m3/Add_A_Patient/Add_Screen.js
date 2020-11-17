import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// import RB from '../RadioButton';

// Declare some global variables for storing the location of the background image:
var background = require('../background.png');
const PROP = [
	{
		key: 'yes',
		text: 'Yes',
	},
	{
		key: 'no',
		text: 'No',
	}
];

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
                <ScrollView style={styles.scrollView}>
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
                        <Text style = {styles.add_patient_Address_Lbl}>Address:</Text>
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
                            placeholder = 'PR'
                            autoCapitalize = 'none'/>
                            </View>
                        </View>   
                    </View>
                    <View style = {styles.add_patient_Phone_Number_area}>
                        <Text style = {styles.add_patient_Phone_Number}>Phone Number:</Text>
                        <TextInput style = {styles.add_patient_Phone}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Phone Number'
                        autoCapitalize = 'none'/>
                    </View>
                    <View style = {styles.add_patient_measurements_area}>
                        <Text style = {styles.add_patient_height_lbl}>Height:</Text>
                        <TextInput style = {styles.add_patient_height}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'in cm'
                        autoCapitalize = 'none'/>
                        <Text style = {styles.add_patient_weight_lbl}>Weight:</Text>
                        <TextInput style = {styles.add_patient_weight}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'in lbs'
                        autoCapitalize = 'none'/>
                    </View>
                    <View style = {styles.add_patient_Medications_area}>
                        <Text style = {styles.add_patient_Phone_Number}>Currently on Medications?:</Text>
                        {/* <View style={styles.container}>
                            <RB PROP={PROP} />
                        </View> */}
                    </View>
                    <View style = {styles.add_patient_meds_specification_area}>
                        <Text style = {styles.add_patient_meds_lbl}>if yes, please specify:</Text>
                        <TextInput style = {styles.add_patient_meds_specs}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'add additional info here:'
                        autoCapitalize = 'none'/>
                    </View>
                    <View style = {styles.add_patient_EPhone_Number_area}>
                        <Text style = {styles.add_patient_EPhone_Number}>Emergency Phone No.:</Text>
                        <TextInput style = {styles.add_patient_EPhone}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Phone Number'
                        autoCapitalize = 'none'/>
                    </View>
                    <View style = {styles.add_patient_E_name_area}>
                        <TextInput style = {styles.add_patient_Efirst_name}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'First Name'
                        autoCapitalize = 'none'/>
                        <TextInput style = {styles.add_patient_Elast_name}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Last Name'
                        autoCapitalize = 'none'/>
                    </View>
                    <View style = {styles.add_patient_ERelationship_area}>
                        <Text style = {styles.add_patient_ERelationship_Lbl}>Relationship:</Text>
                        <TextInput style = {styles.add_patient_ERelatiopnship}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Relationship to contact:'
                        autoCapitalize = 'none'/>
                    </View>
                    <View style={styles.container}>
                            <Button style={styles.search_button}
                                title="Submit"
                                onPress={() => this.props.navigation.navigate('Patient_Records')} 
                                borderColor="#000000"
                                raised = {true}/>
                        </View>
                </ScrollView>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1'
    },
    add_render: {
        marginTop: 30,
        fontSize: 40,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    search_button: {
        position: 'absolute',
        top: 20,
        left: 40
    },
    add_render_text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    add_patient_name_area: {
        height: 50,
        width: 400,
        marginTop: 0,
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
        margin: 20,
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
    add_patient_Address_Lbl: {
        fontSize: 20,
        marginLeft: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_Address_Line_area: {
        height: 120,
        width: 400,
        marginTop: 70,
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
        justifyContent:'space-around',
        alignItems: 'center'
    },
    add_patient_Address_Province_entry:{
        marginTop: 50,
        height: 40,
        width: 50,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_Phone_Number_area: {
        height: 50,
        width: 400,
        marginTop: 115,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    add_patient_Phone_Number: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_Phone: {
        margin: 15,
        height: 40,
        width: 220,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_measurements_area: {
        height: 50,
        width: 400,
        marginTop: 5,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    add_patient_height_lbl: {
        fontSize: 20,
        marginLeft: 20,
        marginRight: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_weight_lbl: {
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_height: {
        margin: 20,
        height: 40,
        width: 70,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_weight: {
        margin: 20,
        height: 40,
        width: 70,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_Medications_area: {
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
    add_patient_medications_choice: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    add_patient_meds_specification_area: {
        height: 180,
        width: 400,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    add_patient_meds_lbl: {
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'normal',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_meds_specs: {
        margin: 15,
        height: 150,
        width: 220,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_EPhone_Number_area: {
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
    add_patient_EPhone_Number: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_EPhone: {
        margin: 15,
        height: 40,
        width: 160,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_E_name_area: {
        height: 50,
        width: 410,
        marginTop: 5,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    add_patient_Efirst_name: {
        margin: 20,
        height: 40,
        width: 180,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_Elast_name: {
        margin: 20,
        height: 40,
        width: 180,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_ERelationship_area: {
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
    add_patient_ERelationship_Lbl: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_ERelatiopnship: {
        margin: 15,
        height: 40,
        width: 220,
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
</Toolbar> 
*/}
//  <DropDownPicker
//     items={[
//         {label: 'ON'},
//         {label: 'BC'},
//         {label: 'NS'},
//         {label: 'NB'},
//         {label: 'PEI'},
//     ]}
//     //defaultValue={this.state.whatever}
//     containerStyle={{height: 30, width: 135}}
//     style={{backgroundColor: '#e9e5e4', borderColor: '#fff', marginLeft: 3}}
//     itemStyle={{
//         justifyContent: 'flex-start'
//     }}
//     dropDownStyle={{backgroundColor: '#fafafa'}}/>
//     /* onChangeItem={item => this.setState({
//         whatever
//         })}

export default Add_Screen