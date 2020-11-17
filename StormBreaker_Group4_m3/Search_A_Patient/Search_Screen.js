import React, {Component, Fragment, useState} from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Button,
    TouchableOpacity, 
    BackHandler,
    TextInput,
    ImageBackground} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Navigation, createStackNavigator } from 'react-navigation-stack';
import View_Patient from './View_Patient';

// Declare some global variables for storing the location of the background image:
var background = require('../background.png');
var items = [
    {
        id: 1,
        name: 'Karen, Jones | 04/02/1992 | 884-324-0930 | Pediatrics',
    },
    {
        id: 2,
        name: 'Kaylee, Matthews | 10/30/1999 | 884-098-9023 | Nursing',
    },
    {
        id: 3,
        name: 'Kendall, Alexander | 07/11/1942 | N/A | Immediate Care',
    },
    {
        id: 4,
        name: 'Briony, Morris | 27/73/4094 | 515-029-3856 | Nursing',
    },
    {
        id: 5,
        name: 'Freddie, Brown | 33/90/7254 | 909-630-2437 | Pediatrics',
    },
    {
        id: 6,
        name: 'Leonardo, Myers | 76/55/6304 | 093-450-8039 | Immediate Care' ,
    },
    {
        id: 7,
        name: 'Alan, Stewart | 06/26/1928 | 570-916-5367 | Pediatrics',
    },
    {
        id: 8,
        name: 'Lydia, Casey | 37/49/8523 | 683-281-9945 | Nursing',
    },
    {
        id: 9,
        name: 'Stella, Wright | 61/87/3391 | 792-256-0896 | Immediate Care',
    },
    {
        id: 10,
        name: 'George, Murray | 78/42/3681 | 905-242-3034 | Immediate Care',
    },
    {
        id: 11,
        name: 'Victoria, Evans | 82/29/0824 | 022-728-4438 | Nursing',
    },
    {
        id: 12,
        name: 'Amelia, Armstrong | 88/21/4432 | 590-851-6165 | Pediatrics',
    },
];

class Search_Screen extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedItems: [
            {
                id: 7,
                name: 'Alan, Stewart | 06/26/1928 | 570-916-5367 | Pediatrics'
            },
            {
                id: 8,
                name: 'Lydia, Casey | 37/49/8523 | 683-281-9945 | Nursing'
            }
            ]
        }
    };
    render(){
        return(
            <ImageBackground
                source = { background }
                style = {{ height: '100%', width: '100%'}}>
                    <View style={styles.welcome_options_c}>
                        <Text style={styles.search_render_text}>Search a Patient</Text>
                    </View>
                    <View style={styles.search_tag}>
                        <Fragment>
                            <SearchableDropdown
                                onItemSelect={(item) => {
                                    const items = this.state.selectedItems;
                                    items.push(item)
                                    this.setState({ selectedItems: items });
                                }}
                                containerStyle={{ padding: 15 }}
                                onRemoveItem={
                                    (item, index) => {
                                    const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
                                    this.setState({ selectedItems: items });
                                }}
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
                                    { maxHeight: 300 }
                                }
                                items={items}
                                defaultIndex={2}
                                autoFocus={true}
                                resetValue={false}
                                textInputProps={
                                {
                                    placeholder: "Enter patient's name here:",
                                    underlineColorAndroid: "black",
                                    style: {
                                        padding: 12,
                                        borderWidth: 1,
                                        color: "#5a5a5a",
                                        borderColor: '#000000',
                                        borderRadius: 7,
                                    },
                                    //onTextChange: text => alert(text)
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
        marginTop: 220,
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
        backgroundColor: '#ecf0f1'
    },
    search_button: {
        position: 'absolute',
        top: 20,
        left: 40
    },
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
    welcome_options_c: {
        height: 50,
        width: 400,
        marginTop: 20,
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0022E1',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    }
});
export default Search_Screen


{/* <View>
    <TouchableOpacity onPress={()=>{}}>
        <View style={{marginLeft: 80}}>
            <Icon name={'undo'} size={26} fontWeight={'bold'} color={'black'} marginTop={10}/>
            <Text>Logout</Text>
        </View>
    </TouchableOpacity>
</View> */}

{/* <View>
    <TouchableOpacity onPress={()=>{}}>
        <View style={{alignSelf: 'flex-start' }}>
            <Icon name={'undo'} size={26} fontWeight={'bold'} color={'black'}/>
            <Text>Logout</Text>
        </View>
    </TouchableOpacity>
</View> */}
/* constructor(props){
    super(props);
    this.state = {
        selectedItems: [
        {
            id: 7,
            name: 'Alan, Stewart | 06/26/1928 | 570-916-5367 | Pediatrics'
        },
        {
            id: 8,
            name: 'Lydia, Casey | 37/49/8523 | 683-281-9945 | Nursing'
        }
        ]
    }
}, */