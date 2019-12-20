import React from 'react'
import { Animated,StyleSheet, View, ImageBackground, Image } from "react-native";
import cat1 from "../assets/pictures/cat-1.png";
import background from "../assets/pictures/background.jpg";
import counterleft from "../assets/pictures/counter-left.png";
import unicorn1 from "../assets/pictures/unicorn-1.png"




export default class Duel extends React.Component{  
  render(){
  return (
    
   
    <ImageBackground source={background} style={{width: '100%', height: '100%'}} >
    

    <View style={styles.container}>

    <View style={styles.counterleft} >
     <Image
       name="counterLeft"
       style={{ width: 250, height: 120 }}
       source={counterleft} />
     </View>


     <View style={styles.characters}>

      <View>
      <View style={styles.lineOne}/>
      
      
      <View style={styles.unicorn1}>
      
        <Image
        name="unicorn1"
        style={{width: 160, height: 200}}
        source={unicorn1}
        />
      </View>
      </View>
      
      
      <View>
      <View style={styles.lineTwo}/>
      <View style={styles.cat1}>
      
      <Image
       name="cat1"
       style={{ width: 200, height: 120}}
       source={cat1} />
      </View>
      </View>

      </View>
      </View>
    </ImageBackground>
  )
}
}



const styles= StyleSheet.create({
 container:{
   flexDirection:"column",
 },

  counterleft: {
    alignItems: "center",
    marginTop: "40%",
  },
  characters:{
    flexDirection:"row",
    padding:9,
    marginTop:-18,

  },
  unicorn1:{
    flexDirection:"column",
    marginTop:-40,
  
  
  },

 
  cat1:{
    flexDirection:"column",
    marginTop:-40,
  },
  lineOne:{
    height: 150,
    width: 4,
    backgroundColor:"rgb(122, 53, 209)",
    alignSelf:"center",
    
  },
  lineTwo:{
    height: 150,
    width: 4,
    backgroundColor:"rgb(122, 53, 209)",
    alignSelf:"center",
  }

}

)


