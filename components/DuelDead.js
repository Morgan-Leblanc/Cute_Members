
import React from 'react'
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import cat3 from "../assets/pictures/cat-3.png";
import background from "../assets/pictures/background.jpg";
import counterright from "../assets/pictures/counter-right.png";
import unicorn3 from "../assets/pictures/unicorn-3.png"




export default  (
    
   
    <ImageBackground source={background} style={{width: '100%', height: '100%'}} >
    

    <View style={styles.cadre}>

    <View style={styles.counterright} >
     <Image
       name="counterright"
       style={{ width: 250, height: 120 }}
       source={counterright} />
     </View>


     <View style={styles.charactersTwo}>

      <View>
      <View style={styles.lineThree} >
      
      
      <View style={styles.unicorn3}>
      
        <Image
        name="unicorn3"
        style={{width: 160, height: 200}}
        source={unicorn3}
        />
      </View>
      </View>
      
      
      <View>
      <View style={styles.lineFour}/>
      <View style={styles.cat3}>
      
      <Image
       name="cat3"
       style={{ width: 200, height: 120}}
       source={cat3} />
      </View>
      </View>

      </View>
      </View>
      </View>
    </ImageBackground>
  )




const styles= StyleSheet.create({
 cadre:{
   flexDirection:"column",
 },

  counterright: {
    alignItems: "center",
    marginTop: "40%",
  },
  charactersTwo:{
    flexDirection:"row",
    padding:9,
    marginTop:-18,

  },
  unicorn3:{
    flexDirection:"column",
    marginTop:-40,
  
  
  },

 
  cat3:{
    flexDirection:"column",
    marginTop:-40,
  },
  lineThree:{
    height: 150,
    width: 4,
    backgroundColor:"rgb(122, 53, 209)",
    alignSelf:"center",
    
  },
  lineFour:{
    height: 150,
    width: 4,
    backgroundColor:"rgb(122, 53, 209)",
    alignSelf:"center",
  }

}

)





