// Import the splash screen requirement classes
import React, {Component, useEffect} from 'react';
import {View,ImageBackground, Image, ActivityIndicator, Text} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Declare some global variables for storing the location of the background image:
var background = require('./background.png');
var logo_icon = require('./712_logo.png');

// Declare the main class for the splash screen:
export default function Splash_Screen({navigation}){
    // Verify Splasg Screen mount time
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Authentication');
        }, 2000);
    }, )
    // Add return function to display the backgroud and logo:
    return(
        // Initialize the ImageBackground Component:
            <ImageBackground
            // Add info about the background picture:
            source = 
            {
                background
            }
            style = 
            {
                {
                    height: '100%', 
                    width: '100%'
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
                    source = 
                    {
                        logo_icon
                    }
                    style = 
                    {
                        {
                            alignContent: 'center',
                            height: '40%',
                            width: '50%'
                        }
                    }></Image>
                    {/* Declare an ActivityIndicator below the Logo */}
                    <ActivityIndicator
                    // Add info about the spinner:
                    size = "large"
                    color = "black"
                    animating = 'true'
                    >
                    </ActivityIndicator>
                    <Text
                    style = 
                    {
                        {
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 25,
                            padding: 15
                        }
                    }>Loading...</Text>
                </View> 
        </ImageBackground>
    );
};
