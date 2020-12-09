import React, {Component, Fragment, useState} from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity, 
    BackHandler,
    TextInput,
    Image,
    ImageBackground} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Divider, Button } from 'react-native-elements';
import update from 'immutability-helper';
import imageURL from './avatar.png';

// Declare some global variables for storing the location of the background image:
var background = require('../background.png');
var FNAME = [
    {
        id: 1,
        name: 'Karen',
        pic: require('./avatar.png'),
    },
    {
        id: 2,
        name: 'Kaylee',
        pic: require('./avatar.png')
    },
    {
        id: 3,
        name: 'Kendall',
        pic: require('../pic.jpg'),
    },
    {
        id: 4,
        name: 'Briony',
        pic: require('./avatar.png'),
    },
    {
        id: 5,
        name: 'Freddie',
        pic: require('./avatar.png'),
    },
];
var LNAME = [
    {
        id: 1,
        name: 'Jones',
        pic: require('./avatar.png'),
    },
    {
        id: 2,
        name: 'Matthews',
        pic: require('./avatar.png')
    },
    {
        id: 3,
        name: 'Alexander',
        pic: require('../pic.jpg'),
    },
    {
        id: 4,
        name: 'Morris',
        pic: require('./avatar.png'),
    },
    {
        id: 5,
        name: 'Brown',
        pic: require('./avatar.png'),
    },
];
var PHONE = [
    {
        id: 1,
        name: '884-324-0930',
        pic: require('./avatar.png'),
    },
    {
        id: 2,
        name: '84-098-9023',
        pic: require('./avatar.png')
    },
    {
        id: 3,
        name: '511-251-1406',
        pic: require('../pic.jpg'),
    },
    {
        id: 4,
        name: '515-029-3856',
        pic: require('./avatar.png'),
    },
    {
        id: 5,
        name: '909-630-2437',
        pic: require('./avatar.png'),
    },
];

class Search_Screen extends Component {
    constructor(props){
        super(props);
        this.state = {
            avatar: require('./avatar.png'),
            selectedItems: [],
            user_fname_entry: '',
            FirstName: '',
            LastName: '',
            PatientContact: '',
            data_holder: []
        }
    };

    fnameHandler=(text)=>{
        this.setState({ 
            FirstName: text 
        })
    };
    lnameHandler=(text)=>{
        this.setState({ 
            LastName: text 
        })
    };
    contactHandler=(text)=>{
        this.setState({ 
            PatientContact: text 
        })
    };

    fetchData=()=>{
        const url = 'https://wecare-heroku.herokuapp.com/patients/'
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    data_holder: data
                })
            })
            .catch((error) => {
            console.log(error)
            .done();
        });
    }
    
    componentDidMount(){
        this.fetchData();
    };
    render(){
        
        const fname = this.state.data_holder.find((val) => {        
            FNAME.push(val.firstName);
            return val.firstName === this.state.FirstName;
        });
        console.log(this.state.FNAME);
        const lname = this.state.data_holder.find((val) => {
            LNAME.push(val.lastName);
            return val.lastName === this.state.LastName;
        });
        const contact_no = this.state.data_holder.some((val) => {
            return val.patientContact === this.state.PatientContact;
        });

        return(
            <ImageBackground
                source = { background }
                style = {{ height: '100%', width: '100%'}}>
                    <View style={styles.search_render}>
                        <Text style={styles.search_render_text}>Search a Patient</Text>
                    </View>
                    <Divider style={{backgroundColor: 'black', height: 1, zIndex: 1}} />
                    <View style = {styles.profile_pic}>
                        <Image
                            style = {{width: 200, height: 200}}
                            source = {this.state.avatar}/>
                    </View>
                    <View style={styles.search_tag}>
                        <Fragment>
                            <SearchableDropdown
                                onItemSelect={(item) => {
                                    const items = this.state.selectedItems;
                                    items.push(item)
                                    this.setState({ 
                                        selectedItems: items,
                                        avatar: item.pic
                                    });
                                }}
                                containerStyle={{ padding: 15 }}
                                itemStyle={{
                                padding: 10,
                                marginTop: 2,
                                backgroundColor: '#ddd',
                                borderColor: '#000000',
                                borderWidth: 1,
                                borderRadius: 5,
                                }}
                                itemTextStyle={
                                    { color: '#5a5a5a' }
                                }
                                itemsContainerStyle={
                                    { maxHeight: 100 }
                                }
                                items={FNAME}
                                autoFocus={false}
                                resetValue={false}
                                textInputProps={
                                {
                                    placeholder: "Enter Patient's First Name here:",
                                    underlineColorAndroid: "black",
                                    style: {
                                        padding: 12,
                                        borderWidth: 1,
                                        color: "#000000",
                                        borderColor: '#000000',
                                        borderRadius: 7,
                                    },
                                    onTextChange:()=>{this.fnameHandler}
                                }
                                }
                                // onBlur={() => 
                                listProps={
                                {
                                    nestedScrollEnabled: true,
                                }
                                }
                            />
                        </Fragment>
                        <Fragment>
                        <SearchableDropdown
                                onItemSelect={(item) => {
                                    const items = this.state.selectedItems;
                                    items.push(item)
                                    this.setState({ 
                                        selectedItems: items,
                                        avatar: item.pic
                                    });
                                }}
                                containerStyle={{ padding: 15 }}
                                itemStyle={{
                                padding: 10,
                                marginTop: 2,
                                backgroundColor: '#ddd',
                                borderColor: '#000000',
                                borderWidth: 1,
                                borderRadius: 5,
                                }}
                                itemTextStyle={
                                    { color: '#5a5a5a' }
                                }
                                itemsContainerStyle={
                                    { maxHeight: 100 }
                                }
                                items={LNAME}
                                autoFocus={true}
                                resetValue={false}
                                textInputProps={
                                {
                                    placeholder: "Enter Patient's Last Name here:",
                                    underlineColorAndroid: "black",
                                    style: {
                                        padding: 12,
                                        borderWidth: 1,
                                        color: "#000000",
                                        borderColor: '#000000',
                                        borderRadius: 7,
                                    },
                                    onTextChange:()=>{this.lnameHandler}
                                }
                                }
                                listProps={
                                {
                                    nestedScrollEnabled: true,
                                }
                                }
                            />
                        </Fragment>
                        <Fragment>
                            <SearchableDropdown
                                onItemSelect={(item) => {
                                    const items = this.state.selectedItems;
                                    items.push(item)
                                    this.setState({ 
                                        selectedItems: items
                                    });
                                }}
                                containerStyle={{ padding: 15 }}
                                itemStyle={{
                                padding: 10,
                                marginTop: 2,
                                backgroundColor: '#ddd',
                                borderColor: '#000000',
                                borderWidth: 1,
                                borderRadius: 5,
                                }}
                                itemTextStyle={
                                    { color: '#5a5a5a' }
                                }
                                itemsContainerStyle={
                                    { maxHeight: 100 }
                                }
                                items={PHONE}
                                autoFocus={true}
                                resetValue={false}
                                textInputProps={
                                {
                                    placeholder: "Enter patient's phone number here:",
                                    underlineColorAndroid: "black",
                                    style: {
                                        padding: 12,
                                        borderWidth: 1,
                                        color: "#5a5a5a",
                                        borderColor: '#000000',
                                        borderRadius: 7,
                                    },
                                    onTextChange:()=> {this.contactHandler}
                                }
                                }
                                listProps={
                                {
                                    nestedScrollEnabled: true,
                                }
                                }
                            />
                        </Fragment>
                        <View style={styles.container}>
                            <Button style={styles.search_button}
                                title="Search"
                                onPress={() => this.props.navigation.navigate('Patient_Records')} 
                                borderColor="#000000"
                                raised = {true}/>
                        </View>
                    </View>
            </ImageBackground>
        )
    }
};
const styles = StyleSheet.create({
    search_tag: {
        marginTop: 10,
        fontSize: 50,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    search_render_text: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: '#ecf0f1',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    profile_pic: {
        marginTop: 20,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    search_button: {
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    search_render: {
        height: 50,
        width: 400,
        marginTop: 10,
        fontSize: 30, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    }
});
export default Search_Screen