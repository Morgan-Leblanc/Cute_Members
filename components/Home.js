import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { AuthSession } from "expo";
import homepage from "../assets/images/homepage.jpg"
import * as Font from "expo-font";


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

  <ImageBackground source={homepage} style={{width: '100%', height: '100%'}} >
    <View style={styles.container}>
        {/* <Text style={styles.title}>CUT(e) MEMBERS</Text> */}
        <Text style={styles.buttonPlay} onPress={() => history.push("/newgame")}>
          PLAY
        </Text>
    </View>
  </ImageBackground>
};


const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    textAlign: "center",
    bottom: 50,
    fontWeight: "bold"
  },
  buttonPlay: {
    backgroundColor: "rgb(122, 53, 209)",
    color: "white",
    fontSize: 50,
    fontFamily: "Londrina",
    top: 70,
    padding:7,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:15,
    paddingHorizontal: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});
