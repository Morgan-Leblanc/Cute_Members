import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity,  ImageBackground } from "react-native";
import homepage from "../assets/images/homepage.jpg"
import { AppLoading, AuthSession } from 'expo';
import * as Font from 'expo-font';


const fetchFonts = () => {
  return Font.loadAsync({
    Londrina: require("../assets/fonts/LondrinaSolid-Regular.ttf"),
    IBM: require("../assets/fonts/IBMPlexSans-Bold.ttf")
  });
};

export default ({ history }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (

  <ImageBackground source={homepage} style={{width: '100%', height: '100%'}} >
    <View style={styles.container}>
        {/* <Text style={styles.title}>CUT(e) MEMBERS</Text> */}
        <TouchableOpacity style={styles.buttonPlay} onPress={() => history.push("/newgame")}>
          <Text style={styles.textButton}>PLAY</Text>
        </TouchableOpacity>
    </View>
  </ImageBackground>

  )
};


const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    textAlign: "center",
    bottom: 50,
    fontWeight: "bold"
  },
  textButton : {
    color: "white",
    fontSize: 50,
    fontFamily: "Londrina",
  },

  buttonPlay: {
    backgroundColor: "rgb(122, 53, 209)",
    top: 450,
    padding:7,
    paddingLeft:55,
    paddingRight:55,
    borderRadius:15,
    paddingHorizontal: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});
