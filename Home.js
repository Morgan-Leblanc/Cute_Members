import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { AuthSession } from "expo";

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    textAlign: 'center',
    bottom: 50,
    fontWeight: 'bold'
  },
  button: {
    fontSize: 60,
    color: "white",
    backgroundColor: "black",
    top: 70,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ({ history }) => (
  <View style={styles.container} >
    <Text style={styles.title}>CUT(e) MEMBERS</Text>
    <TouchableOpacity onPress={() => history.push("/newgame")}>
      <Text style={styles.button} >PLAY</Text>
    </TouchableOpacity>
  </View>


);

