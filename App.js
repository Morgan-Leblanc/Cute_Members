import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from "react-native";


export default class App extends React.Component{
  render(){
  return (
     <Fragment>
    <View style={styles.black}/>
    <View style={styles.lines} style={{justifyContent:'right'}}/>
    </Fragment>
     
    
  );
}
}

const styles = StyleSheet.create({
  black: {
    flex: 1,
    padding: 60,
    marginTop:40 ,
    minWidth: "60%" ,
    backgroundColor: "black"
    
   },
   lines: {
    backgroundColor:"black",
    width:5,
    height:600,

   },
   linesL: {
     backgroundColor:"black",
     width:5,
     height:600,
   }

  })