/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

export default function BasicApp() {

  const [value, onChangeText] = React.useState('Placeholder');

  return (
    <View style={styles.container}>
      <TextInput style={styles.edit}
        onChangeText = {text=>onChangeText(text)}
        val={value} clearTextOnFocus={true}
      />

      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 100
    },
    edit:{
      borderColor: 'black',
      borderWidth: 1,
      width: '90%'
    },
    text:{}
  }
);
