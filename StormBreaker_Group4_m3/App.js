import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Splash_Screen from './Splash_Screen';
import Welcome_Screen from './Welcome_Screen';
import Auth_Screen from './Authentication/Auth_screen';
import Auth_Verified from './Authentication/Auth_verified';
import Auth_Denied from './Authentication/Auth_denied';
import Seach_Screen from './Search_A_Patient/Search_Screen';
import View_Patient from './Search_A_Patient/View_Patient';
import Add_Screen from './Add_A_Patient/Add_Screen';
import MedicalHistory_Screen from './Add_A_Patient/MedicalHistory_Screen';
import ActivePatients_Screen from './Active_Patient_Cases/ActivePatients_Screen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Splash_Screen: {
    screen: Splash_Screen
  },
  Authentication: {
    screen: Auth_Screen
  },
  AVuthentication: {
    screen: Auth_Verified
  },
  ADthentication: {
    screen: Auth_Denied
  },
  Home: {
    screen: Welcome_Screen
  },
  Patient_Records: {
    screen: View_Patient
  },
},
{
    initialRouteName: "Splash_Screen"  
});

const AppContainer = createAppContainer(AppNavigator);
