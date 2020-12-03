import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Divider } from 'react-native-elements';
// import { RadioButton } from 'react-native-paper';
import RB from '../RadioButton';
import CB from '../CheckBox';

// Declare some global variables for storing the location of the background image:
var background = require('../background.png');
const USR_YES_NO = [
	{
		key: 'true',
		text: 'Yes',
    },
    {
        key: 'false',
        text: 'No',
    }
];

const USR_ALCOHOL_USAGE = [
    {
        key: 'daily',
        text: 'Daily',
    },
    {
        key: 'monthly',
        text: 'Monthly',
    },
    {
        key: 'occassionally',
        text: 'Occassionally',
    },
    {
        key: 'never',
        text: 'Never',
    }
];

const USR_GENDER = [
    {
		key: 'male',
		text: 'Male',
    },
    {
		key: 'female',
		text: 'Female',
    },
    {
		key: 'other',
		text: 'Other',
    },
];

const USR_HEALTH_CONDTNS_EPILEPSY = [
    {
		key: 'epilepsy',
		text: 'Epilepsy',
    },
];
const USR_HEALTH_CONDTNS_CARDIAC = [
    {
		key: 'cardiac issues',
		text: 'Cardiac Issues',
    },
];
const USR_HEALTH_CONDTNS_HYPERTENSION = [
    {
		key: 'hypertension',
		text: 'Hypertension',
    },
];
const USR_HEALTH_CONDTNS_CANCER = [
    {
		key: 'cancer',
		text: 'Cancer',
    },
];
const USR_HEALTH_CONDTNS_ASTHMA = [
    {
		key: 'asthma',
		text: 'Asthma',
    },
];
const USR_HEALTH_CONDTNS_DIABETES = [
    {
		key: 'diabetes',
		text: 'Diabetes',
    },
];
const USR_HEALTH_CONDTNS_OTHER = [
    {
		key: 'other',
		text: 'Other',
    },
];

class Add_Screen extends Component {

    state={
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        gender: 'Male',
        address_line_1: '',
        address_line_2: '',
        city: '',
        province: '',
        patientContact: 0,
        height: 0,
        weight: 0,
        currentlyOnMedication: false,
        emergencyContact: 0,
        emergencyFirstName: '',
        emergencyLastName: '',
        Relationship: '',
        diseases: '',
        symptoms: '',
        medicalAllergies: '',
        consumeAlcohol: false,
        consumeTobaccoOrSmoke: false,
        condition: 'Stable',
        dateOfAdmission: new Date(),
    };
    
    

    fetchData=()=>{
        const Address = this.state.address_line_1+','+this.state.address_line_2+','+this.state.city+','+this.state.province
        const data = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            dateOfBirth:this.state.dateOfBirth,
            gender:this.state.gender,
            address:Address,
            patientContact:this.state.patientContact,
            height:this.state.height,
            weight:this.state.height,
            currentlyOnMedication:this.state.currentlyOnMedication,
            emergencyFirstName:this.state.emergencyFirstName,
            emergencyLastName:this.state.emergencyLastName,
            Relationship:this.state.Relationship,
            diseases:this.state.diseases,
            symptoms:this.state.symptoms,
            consumeAlcohol:this.state.consumeAlcohol,
            consumeTobaccoOrSmoke:this.state.consumeTobaccoOrSmoke,
            condition:this.state.condition,
            dateOfAdmission:this.state.dateOfAdmission
        }
        const url = "https://wecare-heroku.herokuapp.com/patients"
        fetch(url,
        {
         headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
          })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    render()
    {       
        return(
            <ImageBackground
                source={ background }
                style={{height: '100%',width: '100%'}}>
                <View style={styles.add_render}>
                    <Text style={styles.add_render_text}>Add a New Patient</Text>
                </View>
                <Divider style={{ marginTop: 10, backgroundColor: 'black', height: 1, zIndex: 1}} />
                <ScrollView style={styles.scrollView}>
                    <View style = {styles.add_patient_name_area}>
                        <Text style = {styles.add_patient_name}>Name:</Text>
                        <TextInput style = {styles.add_patient_first_name}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'First Name'
                        autoCapitalize = 'none'
                        onChangeText={(firstName) => this.setState({ firstName })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"/>
                        <TextInput style = {styles.add_patient_last_name}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Last Name'
                        autoCapitalize = 'none'
                        onChangeText={(lastName) => this.setState({ lastName })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"/>
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
                        <View style = {styles.add_patient_Gender_sex}>
                            <RB user_selection={USR_GENDER} />
                        </View>
                    </View>
                    <View style = {styles.add_patient_Address_area}>
                        <Text style = {styles.add_patient_Address_Lbl}>Address:</Text>
                        <View style = {styles.add_patient_Address_Line_area}>
                            <TextInput style = {styles.add_patient_Address_Line_entry_1}
                            underlineColorAndroid = 'transparent'
                            placeholder = 'Line 1'
                            autoCapitalize = 'none'
                            onChangeText={(address_line_1) => this.setState({ address_line_1 })}
                            ref={input => { this.textInput = input }}
                            returnKeyType="go"/>
                            <TextInput style = {styles.add_patient_Address_Line_entry_2}
                            underlineColorAndroid = 'transparent'
                            placeholder = 'Line 2'
                            autoCapitalize = 'none'
                            onChangeText={(address_line_2) => this.setState({ address_line_2 })}
                            ref={input => { this.textInput = input }}
                            returnKeyType="go"/>
                            <View style = {styles.add_patient_Address_Province_area}>
                            <TextInput style = {styles.add_patient_Address_City_entry}
                            underlineColorAndroid = 'transparent'
                            placeholder = 'City'
                            autoCapitalize = 'none'
                            onChangeText={(city) => this.setState({ city })}
                            ref={input => { this.textInput = input }}
                            returnKeyType="go"/>
                            <TextInput style = {styles.add_patient_Address_Province_entry}
                            underlineColorAndroid = 'transparent'
                            placeholder = 'PR'
                            autoCapitalize = 'none'
                            onChangeText={(province) => this.setState({ province })}
                            ref={input => { this.textInput = input }}
                            returnKeyType="go"/>
                            </View>
                        </View>   
                    </View>
                    <View style = {styles.add_patient_Phone_Number_area}>
                        <Text style = {styles.add_patient_Phone_Number}>Phone Number:</Text>
                        <TextInput style = {styles.add_patient_Phone}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Phone Number'
                        autoCapitalize = 'none'
                        onChangeText={(patientContact) => this.setState({ patientContact })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"/>
                    </View>
                    <View style = {styles.add_patient_measurements_area}>
                        <Text style = {styles.add_patient_height_lbl}>Height:</Text>
                        <TextInput style = {styles.add_patient_height}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'in cm'
                        autoCapitalize = 'none'
                        onChangeText={(height) => this.setState({ height })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"/>
                        <Text style = {styles.add_patient_weight_lbl}>Weight:</Text>
                        <TextInput style = {styles.add_patient_weight}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'in lbs'
                        autoCapitalize = 'none'
                        onChangeText={(weight) => this.setState({ weight })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"/>
                    </View>
                    <View style = {styles.add_patient_Medications_area}>
                        <Text style = {styles.add_patient_meds_lbl}>Currently on Medications?:</Text>
                        <View style={styles.add_patient_medications_choice}>
                            <View style = {styles.row_wise_radio_YES_NO}>
                                <RB user_selection={USR_YES_NO} />
                            </View>
                        </View>
                    </View>
                    <View style = {styles.add_patient_meds_specification_area}>
                        <Text style = {styles.add_patient_meds_YES_lbl}>if yes, please specify:</Text>
                        <TextInput style = {styles.add_patient_meds_specs}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'others please specify here:'
                        autoCapitalize = 'none'
                        // onChangeText={(currentlyOnMedication) => this.setState({ currentlyOnMedication })}
                        // ref={input => { this.textInput = input }}
                        // returnKeyType="go"
                        />
                    </View>
                    <View style = {styles.add_patient_EPhone_Number_area}>
                        <Text style = {styles.add_patient_EPhone_Number}>Emergency Phone No.:</Text>
                        <TextInput style = {styles.add_patient_EPhone}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Phone Number'
                        autoCapitalize = 'none'
                        onChangeText={(emergencyContact) => this.setState({ emergencyContact })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"/>
                    </View>
                    <View style = {styles.add_patient_E_name_area}>
                        <TextInput style = {styles.add_patient_Efirst_name}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'First Name'
                        autoCapitalize = 'none'
                        onChangeText={(emergencyFirstName) => this.setState({ emergencyFirstName })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"/>
                        <TextInput style = {styles.add_patient_Elast_name}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Last Name'
                        autoCapitalize = 'none'
                        onChangeText={(emergencyLastName) => this.setState({ emergencyLastName })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"/>
                    </View>
                    <View style = {styles.add_patient_ERelationship_area}>
                        <Text style = {styles.add_patient_ERelationship_Lbl}>Relationship:</Text>
                        <TextInput style = {styles.add_patient_ERelationship}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Relationship to contact:'
                        autoCapitalize = 'none'
                        onChangeText={(Relationship) => this.setState({ Relationship })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"/>
                    </View>
                    <View style = {styles.add_patient_Existing_Condtns_area}>
                        <Text style = {styles.add_patient_Existing_Condtns_lbl}>Check the following existing health conditions that apply to the patient:</Text>
                    </View>
                    <View style = {styles.add_patient_Existing_Condtns_list_area}>
                        <CB user_selection = {USR_HEALTH_CONDTNS_EPILEPSY}/>
                        <CB user_selection = {USR_HEALTH_CONDTNS_CARDIAC}/>
                        <CB user_selection = {USR_HEALTH_CONDTNS_HYPERTENSION}/>
                    </View>
                    <View style = {styles.add_patient_Existing_Condtns_list_area}>
                        <CB user_selection = {USR_HEALTH_CONDTNS_CANCER}/>
                        <CB user_selection = {USR_HEALTH_CONDTNS_ASTHMA}/>
                        <CB user_selection = {USR_HEALTH_CONDTNS_DIABETES}/>
                        <CB user_selection = {USR_HEALTH_CONDTNS_OTHER}/>
                    </View>
                    <View>
                        <TextInput style = {styles.add_patient_Existing_Condtns_other}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'others please specify here:'
                        autoCapitalize = 'none'
                        onChangeText={(diseases) => this.setState({ diseases })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"/>
                    </View>
                    <View style = {styles.add_patient_Current_Symptoms_area}>
                        <Text style = {styles.add_patient_Current_Symptoms_lbl}>Current symptoms that apply to the patient:</Text>
                    </View>
                    <View>
                        <TextInput style = {styles.add_patient_Current_Symptoms_other}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'please specify here symptoms here:'
                        autoCapitalize = 'none'
                        onChangeText={(symptoms) => this.setState({ symptoms })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"/>
                    </View>
                    <View style = {styles.add_patient_Medical_Allergies_area}>
                        <Text style = {styles.add_patient_Medical_Allergies}>Does the patient have any medical allergies?:</Text>
                        <View style={styles.add_patient_Medical_Allergies_choice}>
                            <View>
                                <RB user_selection={USR_YES_NO} />
                            </View>
                        </View>
                    </View>
                    <View style = {styles.add_patient_Medical_Allergies_YES_area}>
                        <Text style = {styles.add_patient_Medical_Allergies_YES_lbl}>if yes, please specify:</Text>
                        <TextInput style = {styles.add_patient_Medical_Allergies_YES_specs}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'others please specify here:'
                        autoCapitalize = 'none'
                        onChangeText={(medicalAllergies) => this.setState({ medicalAllergies })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"/>
                    </View>
                    <View style = {styles.add_patient_Alcohol_area}>
                        <Text style = {styles.add_patient_Alcohol_lbl}>How often does the patient consume alcohol?:</Text>
                        <View style = {styles.add_patient_Alcohol_data}>
                            <RB user_selection={USR_ALCOHOL_USAGE} />
                        </View>
                    </View>
                    <View style = {styles.add_patient_Tobacco_area}>
                        <Text style = {styles.add_patient_Tobacco}>Does the patient smoke or consume tobacco?:</Text>
                        <View style={styles.add_patient_Tobacco_choice}>
                            <View>
                                <RB user_selection={USR_YES_NO} />
                            </View>
                        </View>
                    </View>
                    <View style = {styles.add_patient_Tobacco_YES_area}>
                        <Text style = {styles.add_patient_Tobacco_YES_lbl}>if yes, please {"\n"}
                        specify how often:</Text>
                        <TextInput style = {styles.add_patient_Tobacco_YES_specs}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'others please specify here:'
                        autoCapitalize = 'none'
                        onChangeText={(province) => this.setState({ province })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"/>
                    </View>
                    <View style={styles.container}>
                        <Button style={styles.search_button}
                            title="Submit"
                            onPress={() => this.bindSubmitClick()} 
                            borderColor="#000000"
                            // raised = {true}
                            />
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
    bindSubmitClick=()=>{
        this.fetchData();
        this.props.navigation.navigate('Home');
    };
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1'
    },
    add_render: {
        marginTop: 10,
        fontSize: 30,
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
        marginTop: 5,
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
    // add_patient_Gender_sex: {
    //     margin: 15,
    //     height: 40,
    //     width: 250,
    //     borderWidth: 1,
    //     padding: 10,
    // },
    add_patient_Gender_sex: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600', 
        color: '#0022E1',
        justifyContent:'center',
        alignItems: 'center'
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
        marginTop: 10,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
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
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_meds_YES_lbl: {
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold',
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
    row_wise_radio_YES_NO: {
        fontSize: 20,
        fontWeight: '600', 
        color: '#0022E1',
        justifyContent:'center',
        alignItems: 'center'
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
    add_patient_ERelationship: {
        margin: 15,
        height: 40,
        width: 220,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_Existing_Condtns_area: {
        height: 50,
        width: 390,
        marginTop: 20,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        justifyContent:'center',
        alignItems: 'center'
    },
    add_patient_Existing_Condtns_lbl: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_Existing_Condtns_list_area: {
        height: 50,
        width: 400,
        marginTop: 20,
        fontSize: 20, 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    add_patient_Existing_Condtns_other: {
        margin: 15,
        height: 40,
        width: 380,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_Current_Symptoms_area: {
        height: 50,
        width: 390,
        marginTop: 10,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        justifyContent:'center',
        alignItems: 'center'
    },
    add_patient_Current_Symptoms_lbl: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_Current_Symptoms_other: {
        margin: 15,
        height: 80,
        width: 380,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_Medical_Allergies_area: {
        height: 100,
        width: 400,
        marginTop: 5,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        justifyContent:'center',
        alignItems: 'center'
    },
    add_patient_Medical_Allergies: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_Medical_Allergies_choice: {
        marginTop: 10,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    add_patient_Medical_Allergies_YES_area: {
        height: 180,
        width: 400,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    add_patient_Medical_Allergies_YES_lbl: {
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_Medical_Allergies_YES_specs: {
        margin: 15,
        height: 150,
        width: 220,
        borderWidth: 1,
        padding: 10,
    },
    add_patient_Alcohol_area: {
        height: 100,
        width: 400,
        marginTop: 15,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        justifyContent:'center',
        alignItems: 'center'
    },
    add_patient_Alcohol_lbl: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_Alcohol_data: {
        marginTop: 20,
        fontSize: 20,
        marginLeft: 20,
        fontWeight: '600', 
        color: '#0022E1',
        justifyContent:'center',
        alignItems: 'center'
    },
    add_patient_Tobacco_area: {
        height: 100,
        width: 400,
        marginTop: 5,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        justifyContent:'center',
        alignItems: 'center'
    },
    add_patient_Tobacco: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_Tobacco_choice: {
        marginTop: 10,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    add_patient_Tobacco_YES_area: {
        height: 180,
        width: 400,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    add_patient_Tobacco_YES_lbl: {
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_Tobacco_YES_specs: {
        margin: 15,
        height: 150,
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