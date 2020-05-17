import React, {Component} from 'react';
import {Text,StyleSheet,View} from 'react-native'

export default class ReadStoryScreen extends Component{
    render(){
        return (
            <View style= {styles.container}>
              <Text style={styles.textStyle}>This screen is for reading any
               story of Interest.{'\n'}
              Books of Fiction, Suspence would be here{'\n'}
              Any other book can also be read Here....
              </Text>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
       flex:1,
       flexDirection:'column',
       width:'100%',
       backgroundColor:'yellow',
       alignItems:'center',
    },
    textStyle:{
        fontSize:35,
        fontWeight:'bold'
    }
});