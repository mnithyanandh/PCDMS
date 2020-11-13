import React, {Component} from 'react';
import { 
    View,
    Text, 
    StyleSheet,
    SafeAreaView, 
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Button,
    Alert 
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Divider } from 'react-native-elements'
/* import Search from './Search_Screen'
import Icons from 'react-native-vector-icons/MaterialIcons';
import { IconButton } from 'react-native-paper'; */

// Declare some global variables for storing the location of the background image:
var background = require('../background.png');

function View_Patient({ navigation }) {
    return(
        <ImageBackground
            source={ background }
            style={{height: '100%',width: '100%'}}>
                <View style={styles.view_patient_info}>
                    <Text style={styles.view_name}>Kendall, Alexander</Text>
                    <Text style={styles.view_patient_base_info}>78years | Female | DOA: 09/10/2019 | 10W-008</Text>
                </View>
                <Divider style={{ marginTop: 10, backgroundColor: 'black', height: 1, zIndex: 1}} />
                <View style = {styles.view_patient_subinfo}>
                    <Text style = {styles.view_title_heading_health_issues}>Health Issues:</Text>
                    <Text style = {styles.view_title_heading_diagnosis_week}>Diagnosis Week:</Text>
                </View>
                <View style = {styles.view_patient_diagnosis_health_issue_items}>
                    <View style = {styles.view_patient_diagnosis_week_number_1}>
                        <Text style={{marginLeft: 5, marginTop: 5, fontWeight: 'bold', color: 'red', fontSize: 15}}>Congestion {'&'} Gastro-intestinal:</Text>
                        <DropDownPicker
                            items={[
                                {label: '1'},
                                {label: '2'},
                                {label: '3'},
                                {label: '4'},
                                {label: '5'},
                            ]}
                            //defaultValue={this.state.whatever}
                            containerStyle={{height: 30, width: 135}}
                            style={{backgroundColor: '#e9e5e4', borderColor: '#fff'}}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{backgroundColor: '#fafafa'}}
                            /* onChangeItem={item => this.setState({
                                whatever
                                })} */
                            />
                    </View>
                    <View style = {styles.view_patient_diagnosis_week_number_2}>
                        <Text style={{ marginRight: 35, marginTop: 5, fontWeight: 'bold', color: 'red', fontSize: 15}}>Abdominal pain {'&'} ENT:</Text>
                        <DropDownPicker
                        items={[
                            {label: '1'},
                            {label: '2'},
                            {label: '3'},
                            {label: '4'},
                            {label: '5'},
                        ]}
                        //defaultValue={this.state.whatever}
                        containerStyle={{height: 30, width: 135}}
                        style={{backgroundColor: '#e9e5e4', borderColor: '#fff', marginLeft: 3}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        /* onChangeItem={item => this.setState({
                            whatever
                            })} */
                        />
                    </View>
                    <View style = {styles.iew_patient_diagnosis_week_number_3}>
                        <TouchableOpacity onPress={()=>{
                            Alert.prompt(
                                "Enter new issue",
                                "Enter the patient's new symptoms or issues most recently diognosed",
                                [
                                    {
                                    text: "Cancel",
                                    onPress: () => console.log("User Cancelled Action"),
                                    style: "cancel"
                                    },
                                    {
                                    text: "OK",
                                    onPress: password => console.log("Entry added successfully" + password)
                                    }
                                ],
                                );
                        }}>
                            <View style={{alignSelf: 'flex-start' }}>
                                <Text style={{marginTop: 5, fontWeight: 'bold', color: '#772fff', fontSize: 15}}>Add new issues here..</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Divider style={{ marginTop: 10, backgroundColor: 'black', height: 1, zIndex: 1}} />
                <View style = {styles.view_patient_clinical_records}>
                    <Text style = {styles.view_patient_clinical_record_edit}>Clinical Record:</Text>
                    <TouchableOpacity onPress={()=>{
                        Alert.prompt(
                            "Add new Clinical Record data:",
                            "Enter the patient's new data:",
                            [
                                {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                                },
                                {
                                text: "OK",
                                onPress: password => console.log("OK Pressed, password: " + password)
                                }
                            ],
                            );
                            }}>
                        <View style={{alignSelf: 'flex-start' }}>
                            <Text style={{marginTop: 5, fontWeight: 'bold', color: '#000', fontSize: 15}}>Click to Edit:</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft: 17, marginRight: 20, width: 380, height: 66, borderWidth: 2}}>
                    <SafeAreaView style={styles.container}>
                        <ScrollView style={styles.scrollView}>
                            <Text style = {{marginLeft: 5, marginRight: 5, fontSize: 17, color: 'red'}}>
                            Blood Pressure: 70/120 mmHg {"\n"} 
                            Respiratory Rate: 15/min {"\n"} 
                            Blood Oxygen Level: 90% {"\n"}
                            Heartbeat Rate: 74/min {"\n"}
                            {"\n"}
                            {"\n"}
                            </Text>
                        </ScrollView>
                    </SafeAreaView>
                </View>
                <Divider style={{ marginTop: 10, backgroundColor: 'black', height: 1, zIndex: 1}} />
                <View style = {styles.view_patient_medical_history}>
                    <Text style = {styles.view_patient_medical_history_edit}>Medical History:</Text>
                    <TouchableOpacity onPress={()=>{
                        Alert.prompt(
                            "Add new Clinical Record data:",
                            "Enter the patient's new data:",
                            [
                                {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                                },
                                {
                                text: "OK",
                                onPress: password => console.log("OK Pressed, password: " + password)
                                }
                            ],
                            );
                            }}>
                        <View style={{alignSelf: 'flex-start' }}>
                            <Text style={{marginTop: 5, fontWeight: 'bold', color: '#000', fontSize: 15}}>Click to Edit:</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft: 17, marginRight: 20, width: 380, height: 66, borderWidth: 2}}>
                    <SafeAreaView style={styles.container}>
                        <ScrollView style={styles.scrollView}>
                            <Text style = {{marginLeft: 5, marginRight: 5, fontSize: 17, color: 'red'}}>
                            Alcohol: Socially {"\n"} 
                            Smoker: Yes {"\n"} 
                            Medical allergies: None so far {"\n"}
                            {"\n"}
                            {"\n"}
                            {"\n"}
                            </Text>
                        </ScrollView>
                    </SafeAreaView>
                </View>
                <Divider style={{ marginTop: 10, backgroundColor: 'black', height: 1, zIndex: 1}} />
                <View style = {styles.view_patient_periodic_checkup}>
                    <Text style = {styles.view_patient_periodic_checkup_edit}>Periodic Checkups:</Text>
                    <TouchableOpacity onPress={()=>{
                        Alert.prompt(
                            "Add new Clinical Record data:",
                            "Enter the patient's new data:",
                            [
                                {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                                },
                                {
                                text: "OK",
                                onPress: password => console.log("OK Pressed, password: " + password)
                                }
                            ],
                            );
                            }}>
                        <View style={{alignSelf: 'flex-start' }}>
                            <Text style={{marginTop: 5, fontWeight: 'bold', color: '#000', fontSize: 15}}>Click to Edit:</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft: 17, marginRight: 20, width: 380, height: 70, borderWidth: 2}}>
                    <SafeAreaView style={styles.container}>
                        <ScrollView style={styles.scrollView}>
                            <Text style = {{marginLeft: 5, marginRight: 5, fontSize: 17, color: 'red'}}>
                            1. ENT Check-up | 12/19/2019 | 3:05pm {"\n"} 
                            2. Radiology | 01/09/2020 | 1:09pm {"\n"} 
                            3. .... {"\n"}
                            {"\n"}
                            {"\n"}
                            {"\n"}
                            </Text>
                        </ScrollView>
                    </SafeAreaView>
                </View>
                <View style={styles.container}>
                    <Button style={styles.save_button}
                        title="Save Changes"
                        // borderWidth= {1}
                        borderColor="#000000"
                        onPress={() => { 
                            navigation.navigate('Search')}
                        }
                        raised = {true}/>
                </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({  
    container: {
        backgroundColor: '#ecf0f1'
    },
    view_tag: {
        marginTop: 20,
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
    view_patient_info: {
        marginTop: 30,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1', 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignContent: 'center'
    },
    view_name: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#3948fc',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    view_patient_base_info: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#3948fc',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
    },
    view_patient_subinfo: {
        height: 50,
        width: 400,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    view_title_heading_health_issues: {
        fontSize: 22,
        marginLeft: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline'

    },
    view_title_heading_diagnosis_week: {
        fontSize: 22,
        marginLeft: 90,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline'

    },
    view_patient_diagnosis_week_number_1: {
        width: 400,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around',
        zIndex: 10
    },
    view_patient_diagnosis_week_number_2: {
        width: 400,
        marginTop: 10,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around',
        zIndex: 9
    },
    iew_patient_diagnosis_week_number_3: {
        width: 400,
        marginTop: 10,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        alignItems: 'center'
    },
    view_patient_diagnosis_diagnosis_issue_item_1: {
        color: '#0022E1',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    view_patient_diagnosis_health_issue_items: {
        marginTop: 10,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        zIndex: 11
    },
    view_patient_clinical_records: {
        height: 50,
        width: 400,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    view_patient_clinical_record_edit: {
        fontSize: 22,
        marginLeft: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline'
    },
    view_patient_medical_history: {
        height: 50,
        width: 400,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    view_patient_medical_history_edit: {
        fontSize: 22,
        marginLeft: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline'
    },
    view_patient_periodic_checkup: {
        height: 50,
        width: 400,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    view_patient_periodic_checkup_edit: {
        fontSize: 22,
        marginLeft: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline'
    },
    save_button: {
        position: 'absolute',
        top: 20,
        left: 40
    },
});
export default View_Patient