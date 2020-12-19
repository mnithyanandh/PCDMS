import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView , Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Divider, Button } from 'react-native-elements';
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
		key: 'Male',
		text: 'Male',
    },
    {
		key: 'Female',
		text: 'Female',
    },
    {
		key: 'Other',
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
        dateOfAdmission : new Date(),
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
        bloodPressure: '',
        respiratoryRate: '',
        bloodOxygenLevel: '',
        heartbeatRate: '',
        medicalAllergies: '',
        consumeAlcohol: false,
        consumeTobaccoOrSmoke: false,
        condition: 'Stable',
    };
    
    clearText = () => {
        this.setState({firstName: ''})
        this.setState({lastName: ''})
    }

    fetchData = () => {
        const Address = this.state.address_line_1+','+this.state.address_line_2+','+this.state.city+','+this.state.province
        const data = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            dateOfBirth:this.state.dateOfBirth,
            dateOfAdmission:this.state.dateOfAdmission,
            gender:this.state.gender,
            address:Address,
            patientContact:this.state.patientContact,
            height:this.state.height,
            weight:this.state.height,
            bloodPressure:this.state.bloodPressure,
            respiratoryRate:this.state.respiratoryRate,
            bloodOxygenLevel:this.state.bloodOxygenLevel,
            heartbeatRate:this.state.heartbeatRate,
            currentlyOnMedication:this.state.currentlyOnMedication,
            emergencyFirstName:this.state.emergencyFirstName,
            emergencyLastName:this.state.emergencyLastName,
            Relationship:this.state.Relationship,
            diseases:this.state.diseases,
            symptoms:this.state.symptoms,
            consumeAlcohol:this.state.consumeAlcohol,
            consumeTobaccoOrSmoke:this.state.consumeTobaccoOrSmoke,
            condition:this.state.condition,
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
                        underlineColorAndroid = "transparent"
                        placeholder = 'First Name'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(firstName) => this.setState({ firstName })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                        <TextInput style = {styles.add_patient_last_name}
                        underlineColorAndroid = "transparent"
                        placeholder = 'Last Name'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(lastName) => this.setState({ lastName })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                    </View>
                    <View style = {styles.add_patient_DOB_A_area}>
                        <Text style = {styles.add_patient_DOB}>DOB:</Text>
                        <TextInput style = {styles.add_patient_DOB_MM}
                        underlineColorAndroid = "transparent"
                        placeholder = 'MM'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        clearTextOnFocus={true}/>
                        <TextInput style = {styles.add_patient_DOB_DD}
                        underlineColorAndroid = "transparent"
                        placeholder = 'DD'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        clearTextOnFocus={true}/>
                        <TextInput style = {styles.add_patient_DOB_YYYY}
                        underlineColorAndroid = "transparent"
                        placeholder = 'YYYY'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        clearTextOnFocus={true}/>
                        <Text style = {styles.add_patient_DOA}>DOA:</Text>
                        <TextInput style = {styles.add_patient_DOA_Date}
                        underlineColorAndroid = "transparent"
                        placeholder = 'Today'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        clearTextOnFocus={true}/>
                    </View>
                    <View style = {styles.add_patient_Gender_area}>
                        <Text style = {styles.add_patient_Gender}>Gender:</Text>
                        <View style = {styles.add_patient_Gender_sex}>
                            <RB user_selection={USR_GENDER}
                            value = {this.state.gender} />
                        </View>
                    </View>
                    <View style = {styles.add_patient_Address_area}>
                        <Text style = {styles.add_patient_Address_Lbl}>Address:</Text>
                        <View style = {styles.add_patient_Address_Line_area}>
                            <TextInput style = {styles.add_patient_Address_Line_entry_1}
                            underlineColorAndroid = "transparent"
                            placeholder = 'Line 1'
                            placeholderTextColor="#808080"
                            autoCapitalize = 'none'
                            onChangeText={(address_line_1) => this.setState({ address_line_1 })}
                            ref={input => { this.textInput = input }}
                            returnKeyType="go"
                            clearTextOnFocus={true}/>
                            <TextInput style = {styles.add_patient_Address_Line_entry_2}
                            underlineColorAndroid = "transparent"
                            placeholder = 'Line 2'
                            placeholderTextColor="#808080"
                            autoCapitalize = 'none'
                            onChangeText={(address_line_2) => this.setState({ address_line_2 })}
                            ref={input => { this.textInput = input }}
                            returnKeyType="go"
                            clearTextOnFocus={true}/>
                            <View style = {styles.add_patient_Address_Province_area}>
                                <TextInput style = {styles.add_patient_Address_City_entry}
                                underlineColorAndroid = "transparent"
                                placeholder = 'City'
                                placeholderTextColor="#808080"
                                autoCapitalize = 'none'
                                onChangeText={(city) => this.setState({ city })}
                                ref={input => { this.textInput = input }}
                                returnKeyType="go"
                                clearTextOnFocus={true}/>
                                <TextInput style = {styles.add_patient_Address_Province_entry}
                                underlineColorAndroid = "transparent"
                                placeholder = 'PR'
                                placeholderTextColor="#808080"
                                autoCapitalize = 'none'
                                onChangeText={(province) => this.setState({ province })}
                                ref={input => { this.textInput = input }}
                                returnKeyType="go"
                                clearTextOnFocus={true}/>
                            </View>
                        </View>   
                    </View>
                    <View style = {styles.add_patient_Phone_Number_area}>
                        <Text style = {styles.add_patient_Phone_Number}>Phone Number:</Text>
                        <TextInput style = {styles.add_patient_Phone}
                        underlineColorAndroid = "transparent"
                        placeholder = 'Phone Number'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(patientContact) => this.setState({ patientContact })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                    </View>
                    <View style = {styles.add_patient_measurements_area}>
                        <Text style = {styles.add_patient_height_lbl}>Height:</Text>
                        <TextInput style = {styles.add_patient_height}
                        underlineColorAndroid = "transparent"
                        placeholder = 'in cm'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(height) => this.setState({ height })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                        <Text style = {styles.add_patient_weight_lbl}>Weight:</Text>
                        <TextInput style = {styles.add_patient_weight}
                        underlineColorAndroid = "transparent"
                        placeholder = 'in kgs'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(weight) => this.setState({ weight })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                    </View>
                    <View style = {styles.add_patient_BP_area}>
                        <Text style = {styles.add_patient_BP_lbl}>Blood Pressure:</Text>
                        <TextInput style = {styles.add_patient_BP}
                        underlineColorAndroid = "transparent"
                        placeholder = 'Ex: 70/120'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(bloodPressure) => this.setState({ bloodPressure })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                    </View>
                    <View style = {styles.add_patient_RR_area}>
                        <Text style = {styles.add_patient_RR_lbl}>Respiratory Rate:</Text>
                        <TextInput style = {styles.add_patient_RR}
                        underlineColorAndroid = "transparent"
                        placeholder = 'Ex: 30/min'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(respiratoryRate) => this.setState({ respiratoryRate })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                    </View>
                    <View style = {styles.add_patient_BOL_area}>
                        <Text style = {styles.add_patient_BOL_lbl}>Blood Oxygen{"\n"} Level:</Text>
                        <TextInput style = {styles.add_patient_BOL}
                        underlineColorAndroid = "transparent"
                        placeholder = 'Ex: 95%'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(bloodOxygenLevel) => this.setState({ bloodOxygenLevel })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                    </View>
                    <View style = {styles.add_patient_HR_area}>
                        <Text style = {styles.add_patient_HR_lbl}>Heart Rate:</Text>
                        <TextInput style = {styles.add_patient_HR}
                        underlineColorAndroid = "transparent"
                        placeholder = 'Ex: 75/min'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(heartbeatRate) => this.setState({ heartbeatRate })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                    </View>
                    <View style = {styles.add_patient_Medications_area}>
                        <Text style = {styles.add_patient_meds_lbl}>Currently on Medications?:</Text>
                        <View style={styles.add_patient_medications_choice}>
                            <View style = {styles.row_wise_radio_YES_NO}>
                                <RB user_selection={USR_YES_NO}
                                //     on={() => {
                                //         if (USR_YES_NO.key == 'true'){
                                //             this.setState.currentlyOnMedication = true
                                //             console.log(this.state.currentlyOnMedication)
                                //         }
                                //         else{
                                //             this.setState.currentlyOnMedication = false
                                //             console.log(this.state.currentlyOnMedication)
                                //         }
                                //     }   
                                // }
                                />
                            </View>
                        </View>
                    </View>
                    <View style = {styles.add_patient_meds_specification_area}>
                        <Text style = {styles.add_patient_meds_YES_lbl}>if yes,</Text>
                        <TextInput style = {styles.add_patient_meds_specs}
                        underlineColorAndroid = "transparent"
                        placeholder = 'please specify here:'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(currentlyOnMedication) => this.setState({ currentlyOnMedication })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        />
                    </View>
                    <View style = {styles.add_patient_EPhone_Number_area}>
                        <Text style = {styles.add_patient_EPhone_Number}>Emergency Phone No.:</Text>
                        <TextInput style = {styles.add_patient_EPhone}
                        underlineColorAndroid = "transparent"
                        placeholder = 'Phone Number'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(emergencyContact) => this.setState({ emergencyContact })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                    </View>
                    <View style = {styles.add_patient_E_name_area}>
                        <TextInput style = {styles.add_patient_Efirst_name}
                        underlineColorAndroid = "transparent"
                        placeholder = 'First Name'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(emergencyFirstName) => this.setState({ emergencyFirstName })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                        <TextInput style = {styles.add_patient_Elast_name}
                        underlineColorAndroid = "transparent"
                        placeholder = 'Last Name'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(emergencyLastName) => this.setState({ emergencyLastName })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                    </View>
                    <View style = {styles.add_patient_ERelationship_area}>
                        <Text style = {styles.add_patient_ERelationship_Lbl}>Relationship:</Text>
                        <TextInput style = {styles.add_patient_ERelationship}
                        underlineColorAndroid = "transparent"
                        placeholder = 'Relationship to contact?'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(Relationship) => this.setState({ Relationship })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
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
                        underlineColorAndroid = "transparent"
                        placeholder = 'please specify here:'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(diseases) => this.setState({ diseases })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                    </View>
                    <View style = {styles.add_patient_Current_Symptoms_area}>
                        <Text style = {styles.add_patient_Current_Symptoms_lbl}>Current symptoms that apply to the patient:</Text>
                    </View>
                    <View>
                        <TextInput style = {styles.add_patient_Current_Symptoms_other}
                        underlineColorAndroid = "transparent"
                        placeholder = 'specify symptoms here:'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(symptoms) => this.setState({ symptoms })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
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
                        <Text style = {styles.add_patient_Medical_Allergies_YES_lbl}>if yes, please {"\n"}
                        specify them here:</Text>
                        <TextInput style = {styles.add_patient_Medical_Allergies_YES_specs}
                        underlineColorAndroid = "transparent"
                        placeholder = 'specify allergies here:'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(medicalAllergies) => this.setState({ medicalAllergies })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
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
                        underlineColorAndroid = "transparent"
                        placeholder = 'please specify here:'
                        placeholderTextColor="#808080"
                        autoCapitalize = 'none'
                        onChangeText={(province) => this.setState({ province })}
                        ref={input => { this.textInput = input }}
                        returnKeyType="go"
                        clearTextOnFocus={true}/>
                    </View>
                    <View style = {styles.add_Button_area}>
                    <Button style={styles.submit_button}
                    color = "#000000"
                    title="Submit"
                    onPress={() => 
                        {
                            Alert.alert(
                                "Are you sure you want to proceed?",
                                "Press Cancel to double-check patient data. Press OK to proceed",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () => this.clearText,
                                        style: "cancel"
                                    },
                                    {
                                        text: "OK",
                                        onPress: () => this.bindSubmitClick(),
                                        style: "Ok"
                                    }
                                ]
                            )
                        }
                    }
                    borderColor="#000000"/>
                    <Button style={styles.cancel_button}
                    color = "#000000"
                    title="Cancel"
                    onPress={() => 
                        {
                            Alert.alert(
                                "Clear Patient Form?",
                                "Press Cancel to go back to editing. Press OK to clear the form.",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () => this.clearText,
                                        style: "cancel"
                                    },
                                    {
                                        text: "OK",
                                        onPress: () => this.bindCancelClick(),
                                        style: "Ok"
                                    }
                                ]
                            )
                        }
                    }
                    borderColor="#000000"/>
                    </View>
                    <Divider style={{ marginTop: 20, backgroundColor: 'black', height: 1, zIndex: 1}} />
                </ScrollView>
            </ImageBackground>
        );
    }
    bindSubmitClick=()=>{
        this.fetchData();
        this.props.navigation.navigate('Home');
    };
    
    bindCancelClick = () => {
        this.clearText();
    };
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    add_render: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    add_Button_area: {
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
    submit_button: {
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancel_button: {
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    add_render_text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    add_patient_name_area: {
        height: 50,
        width: 400,
        marginTop: 20,
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
        borderRadius: 10,
        padding: 10,
    },
    add_patient_last_name: {
        margin: 15,
        height: 40,
        width: 150,
        borderWidth: 1,
        borderRadius: 10,
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
        borderRadius: 10,
        padding: 10,
    },
    add_patient_DOB_DD: {
        margin: 15,
        height: 40,
        width: 50,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    add_patient_DOB_YYYY: {
        margin: 15,
        height: 40,
        width: 60,
        borderWidth: 1,
        borderRadius: 10,
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
        borderRadius: 10,
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
        marginTop: 20,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    add_patient_Address_Lbl: {
        fontSize: 20,
        marginLeft: 100,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_Address_Line_area: {
        height: 120,
        width: 400,
        marginTop: 70,
        fontSize: 20,
        marginLeft: 70,
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'column',
        justifyContent:'space-evenly',
        alignItems: 'center'
    },
    add_patient_Address_Line_entry_1: {
        margin: 15,
        height: 40,
        marginBottom: 30,
        width: 250,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    add_patient_Address_Line_entry_2: {
        margin: 15,
        height: 40,
        width: 250,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    add_patient_Address_Province_area: {
        height: 50,
        width: 210,
        fontSize: 20, 
        marginTop: 25,
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center'
    },
    add_patient_Address_City_entry:{
        height: 40,
        width: 140,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    add_patient_Address_Province_entry:{
        height: 40,
        width: 60,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    add_patient_Phone_Number_area: {
        height: 50,
        width: 400,
        marginTop: 120,
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
        borderRadius: 10,
        padding: 10,
    },
    add_patient_measurements_area: {
        height: 50,
        width: 400,
        marginTop: 20,
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
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_weight_lbl: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_height: {
        height: 40,
        width: 100,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    add_patient_weight: {
        height: 40,
        width: 100,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    add_patient_BP_area: {
        height: 50,
        width: 400,
        marginTop: 20,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center'
    },
    add_patient_RR_area: {
        height: 50,
        width: 400,
        marginTop: 20,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center'
    },
    add_patient_BOL_area: {
        height: 50,
        width: 400,
        marginTop: 20,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center'
    },
    add_patient_HR_area: {
        height: 50,
        width: 400,
        marginTop: 20,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center'
    },
    add_patient_BP_lbl: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_RR_lbl: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_BOL_lbl: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    add_patient_HR_lbl: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    add_patient_BP: {
        height: 40,
        width: 210,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    add_patient_RR: {
        height: 40,
        width: 180,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    add_patient_BOL: {
        margin: 10,
        height: 40,
        width: 190,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    add_patient_HR: {
        height: 40,
        width: 230,
        borderWidth: 1,
        borderRadius: 10,
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
        borderRadius: 10,
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
        borderRadius: 10,
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
        borderRadius: 10,
        padding: 10,
    },
    add_patient_Elast_name: {
        margin: 20,
        height: 40,
        width: 180,
        borderWidth: 1,
        borderRadius: 10,
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
        borderRadius: 10,
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
        borderRadius: 10,
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
        borderRadius: 10,
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
        borderRadius: 10,
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
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    add_patient_Tobacco_YES_specs: {
        margin: 15,
        height: 150,
        width: 220,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
})

export default Add_Screen