import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class Metric extends Component {
    render()
    {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Metric Measurement</Text>
            </View>
        );
    }
}
export default class MCalculation extends Component{
    state={
        height: '',
        kgs: '',
        bmi: '',
        result: ''
    }
    heightHandler=(text)=>{
        this.setState({ height: text })
    }
    weightHandler=(text)=>{
        this.setState({ kgs: text })
    }
    measurement=(height, kgs)=>{
        var res=(parseFloat(kgs*10000))/((parseFloat(height))*(parseFloat(height)));
        res=res.toFixed(2);
        this.setState({bmi: res})

        if(res < 18.5){
            this.setState({result: 'You are under-weight. Giddy up and eat well!'})
        }
        else if(res >= 18.5 && res < 25){
            this.setState({result: 'You are of normal weight!'})
        }
        else if(res >= 25 && res < 30){
            this.setState({result: 'You are over-weight. Make them regular runs!'})
        }
        else if(res > 30){
            this.setState({result: 'Generally considered obese. Really need to make a workout plan!'})
        }
        else{
            this.setState({result: 'Incorrect values entered. Please try again.'})
        }
    }
    render() {
        return (
           <View style = {styles.container}>
               <Text style = {styles.title}>Metric Measurement</Text>
               
               <Text style = {styles.label}>Height</Text>
               <TextInput style = {styles.input}
               underlineColorAndroid = 'transparent'
               placeholder = 'Height (cm)'
               autoCapitalize = 'none'
               onChangeText = {this.heightHandler}/>
               
               <Text style = {styles.label}>Weight</Text>
               <TextInput style = {styles.input}
               underlineColorAndroid = 'transparent'
               placeholder = 'Kilograms (kgs)'
               autoCapitalize = 'none'
               onChangeText = {this.weightHandler}/>
               
               <TouchableOpacity
                style = {styles.submit}
                onPress = {() => this.measurement(this.state.height, this.state.kgs)}>
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
            paddingTop:30,
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
            backgroundColor: '#ff6666',
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