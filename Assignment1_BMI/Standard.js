import React, {Component} from 'react';
import { View, Text } from 'react-native';

export default class Standard extends Component {
    render()
    {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Imperial Measurement</Text>
            </View>
        );
    }
}
class Calculation extends Component{
    state={
        feet: '',
        inches: '',
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
        var temp_inches = (feet*12)+inches;
        var height=parseFloat(temp_inches*2.5);
        var weight=parseFloat(lbs*0.453592);
        var res=(parseFloat(weight*10000))/(parseFloat(height))*(parseFloat(height));
        res=res.toFixed(3);
        this.setState({bmi: res})

        if(res < 18.5){
            this.setState({result: 'You are under-weight. Giddy up and eat up!'})
        }
        else if(res >= 18.5 && res < 25){
            this.setState({result: 'You are of normal weight!'})
        }
        else if(res >= 25 && res < 30){
            this.setState({result: 'You are over-weight. Make then regular runs!'})
        }
        else if(res > 30){
            this.setState({result: 'Obese. Really need to make a diet plan!'})
        }
        else{
            this.setState({result: 'Incorrect values entered. Please try again.'})
        }
    }
}