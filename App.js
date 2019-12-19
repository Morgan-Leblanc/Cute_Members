import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from "react-native";


export default class App extends React.Component{
  render(){
  return (
     <View style={{justifyContent:"center"}}>
    <View style={styles.black} />
    <View style={styles.lineOne}/>
    </View>
    
     
    
  );
}
}

const styles = StyleSheet.create({
  black: {
    padding: 90,
    margin: 5,
    backgroundColor: 'black',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,

},
  lineOne: {
    padding:3,
    margin:5,
    maxWidth:"3%",
    height:600,
    backgroundColor:'pink'

  },

})