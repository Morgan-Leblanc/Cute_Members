import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import chicken from "../assets/pictures/chicken.png";
import cat from "../assets/pictures/cat.png";
import goat from "../assets/pictures/goat.png";

export default ({ history }) => (
  <View style={styles.container}>
    <Text style={styles.text} h1>
      Choose your animal
    </Text>
    <View style={styles.playersBox}>
      <View style={styles.playerOne}>
        <Text> Player One</Text>
        <View style={styles.characters}>
          <TouchableOpacity
            title="change page"
            onPress={() => history.push("/")}
          >
            <Image style={{ width: 70, height: 70 }} source={chicken} />
          </TouchableOpacity>
          <TouchableOpacity
            title="change page"
            onPress={() => history.push("/")}
          >
            <Image style={{ width: 70, height: 70 }} source={cat} />
          </TouchableOpacity>
          <TouchableOpacity
            title="change page"
            onPress={() => history.push("/")}
          >
            <Image style={{ width: 70, height: 70 }} source={goat} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.playerTwo}>
        <Text> Player Two</Text>
        <View style={styles.characters}>
          <TouchableOpacity
            title="change page"
            onPress={() => history.push("/")}
          >
            <Image style={{ width: 70, height: 70 }} source={chicken} />
          </TouchableOpacity>
          <TouchableOpacity
            title="change page"
            onPress={() => history.push("/")}
          >
            <Image style={{ width: 70, height: 70 }} source={cat} />
          </TouchableOpacity>
          <TouchableOpacity
            title="change page"
            onPress={() => history.push("/")}
          >
            <Image style={{ width: 70, height: 70 }} source={goat} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  container: {
    maxHeight: "100%",
    top: 50,
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  characters: {
    maxHeight: 140,
    width: 250,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around"
  },
  playerOne: {
    maxHeight: 200,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  playerTwo: {
    maxHeight: 200,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  playersBox: {
    flex: 1,
    bottom: "7%",
    alignItems: "center",
    justifyContent: "center",

  }
});
