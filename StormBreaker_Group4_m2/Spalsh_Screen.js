// Import the splash screen requirement classes
import React, {Component} from 'react';
import {View, Image, ImageBackground} from 'react-native';

// Declare soem global variables for storing the location of the background image:
var background = ('./background.png');
var logo_icon = ('./712_logo.png')

// Declare the main class for the splash screen:
export default class Splash extends Component{
    
    // Initialize render:
    render(){

        // Initialize the ImageBackground Component:
        <ImageBackground
        // Add info about the background picture:
            source = {background}
            style = 
            {
                {
                    height = '100%', 
                    width = '100%'
                }
            }>
                {/* Declare View Component overlaying the ImageBackground */}
                <View
                // Add styling for the View Component:
                style = 
                {
                    {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                }>

                    {/* Declare the Image Component overlaying the View controller for the logo placement */}
                    <Image 
                    
                    // Add info about the logo
                    source = {logo_icon}
                    style = 
                    {
                        {
                            height: 100,
                            width: 100
                        }
                    }></Image>
                </View> 
        </ImageBackground>
    }
}