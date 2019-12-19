import React from "react";
import {View} from 'react-native';

export default class Home extends React.Component{
  render(){
  return (
     <View>
    <View style={styles.black}/>
    <View style={styles.lines} style={{justifyContent:'right'}}/>
    </View>
     
    
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

});
