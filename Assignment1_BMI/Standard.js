import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

class Standard extends Component {
    render()
    {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Imperial Measurement</Text>
            </View>
        );
    }
}
export default class ICalculation extends Component{
    state={
        feet: '',
        inches: '0',
        lbs: '',
        bmi: '',
        result: ''
    }
    feetHandler=(text)=>{
        this.setState({ feet: text })
    }
    inchesHandler=(text)=>{
        this.setState({inches: text})
    }
    lbsHandler=(text)=>{
        this.setState({ lbs: text })
    }
    measurement=(feet, inches, lbs)=>{

        if(parseFloat(inches) > 12){
            this.setState({result: 'Incorrect values entered. Please try again.'})
        }
        else{
        var temp_inches = parseFloat(feet*12) + parseFloat(inches);
        var height=parseFloat(temp_inches*2.5);
        var weight=parseFloat(lbs*0.453592);
        var res=(parseFloat(weight*10000))/((parseFloat(height))*(parseFloat(height)));
        res=res.toFixed(2);
        this.setState({bmi: res})

        if(res < 18.5){
            this.setState({result: 'You are under-weight. Giddy up and eat well!'})
        }
        else if(res >= 18.5 && res < 25){
            this.setState({result: 'You are of normal weight!'})
        }
        else if(res >= 25 && res <= 29.9){
            this.setState({result: 'You are over-weight. Make them regular runs!'})
        }
        else if(res > 30){
            this.setState({result: 'Generally considered obese. Really need to make a workout plan!'})
        }
        else{
            this.setState({result: 'Incorrect values entered. Please try again.'})
        }
        }
    }
    render() {
        return (
           <View style = {styles.container}>
               
               <Text style = {styles.title}>Imperial Measurement</Text>
               
               <Text style = {styles.label}>Feet</Text>
               <TextInput style = {styles.input}
               underlineColorAndroid = 'transparent'
               placeholder = 'Feet (ft)'
               autoCapitalize = 'none'
               onChangeText = {this.feetHandler}/>
               
               <Text style = {styles.label}>Inches</Text>
               <TextInput style = {styles.input}
               underlineColorAndroid = 'transparent'
               placeholder = 'Inches (in)'
               autoCapitalize = 'none'
               onChangeText = {this.inchesHandler}/>
                
               <Text style = {styles.label}>Lbs</Text>
               <TextInput style = {styles.input} 
               placeholder = 'Pounds (lbs)'
               autoCapitalize = 'none'
               onChangeText = {this.lbsHandler}/>
               
               <TouchableOpacity
                style = {styles.submit}
                onPress = {() => this.measurement(this.state.feet, this.state.inches, this.state.lbs)
                }>
                <Text style = {styles.submitText}> Calculate </Text>
               </TouchableOpacity>
               
               <Text style = {styles.output}>{this.state.bmi}</Text>
               
               <Text style = {styles.result}>{this.state.result}</Text>
           </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        container: {
            paddingTop: 25
        },
        title:{
            paddingTop:150,
            paddingBottom:10,
            textAlign: "center",
            fontSize: 30,
            fontWeight:"bold",
         },
         label:{
            marginLeft: 15,
         },
        input: {
            margin: 15,
            height: 40,
            borderWidth: 1,
            padding: 10,
        },
        output:{
            textAlign: "center",
            fontSize: 30,
        },
        result:{
            paddingTop:20,
            paddingBottom:10,
            textAlign: "center",
            fontSize: 20,
            color: 'black'
         },
        submit: {
            backgroundColor: '#00CED1',
            padding: 10,
            margin: 15,
            height: 40,
        },
        submitText:{
            textAlign: "center",
            color: 'white',
           // fontWeight:"bold",
            fontSize: 20,
        },
    }
)