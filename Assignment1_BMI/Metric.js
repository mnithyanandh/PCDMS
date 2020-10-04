import React, {Component} from 'react';
import { View, Text } from 'react-native';

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

class Calculation extends Component{
    state={
        height='',
        kgs='',
        bmi='',
        result=''
    }
    heightHandler=(text)=>{
        this.setState({ height: text })
    }
    weightHandler=(text)=>{
        this.setState({ kgs: text })
    }
    measurement=(height, kgs)=>{
        var res=
        (parseFloat(kgs*10000))/(parseFloat(height*0.01))*(parseFloat(height*0.01));
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
render() {
    return (
       <View style = {styles.container}>
        </View>
    );
}

const style = StyleSheet.create(
    {
        container: {
            paddintTop: 25
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
            fontSize: 30,
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