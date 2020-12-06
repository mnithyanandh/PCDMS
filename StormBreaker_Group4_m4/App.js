import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Splash_Screen from './Splash_Screen';
import Welcome_Screen from './Welcome_Screen';
import Auth_Screen from './Authentication/Auth_screen';
import Auth_Verified from './Authentication/Auth_verified';
import Auth_Denied from './Authentication/Auth_denied';
import Search_Screen from './Search_A_Patient/Search_Screen';
import View_Patient from './Search_A_Patient/View_Patient';
import Add_Screen from './Add_A_Patient/Add_Screen';
import ActivePatients_Screen from './Active_Patient_Cases/ActivePatients_Screen';
import { NativeAppEventEmitter } from 'react-native';

export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Splash_Screen: {
    screen: Splash_Screen,
    navigationOptions: {
      header: null,
    }
  },
  Authentication: {
    screen: Auth_Screen,
    navigationOptions: {
      header: null,
    }
  },
  AVuthentication: {
    screen: Auth_Verified,
    navigationOptions: {
      header: null,
    }
  },
  ADthentication: {
    screen: Auth_Denied,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: Welcome_Screen,
    navigationOptions: {
      title: 'PCDMS',
      headerLeft: null,
    }
  },
  Patient_Records: {
    screen: View_Patient,
    navigationOptions: {
      title: 'PCDMS',
      headerLeft: null,
    }
  },
  Search_Records: {
    screen: Search_Screen,
    navigationOptions: {
      title: 'PCDMS',
      headerLeft: null,
    }
  },
},
{
    initialRouteName: "Search_Records"  
});

const styles = StyleSheet.create({

  headerStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

const AppContainer = createAppContainer(AppNavigator);

