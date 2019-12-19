import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import chicken from "../assets/pictures/chicken.png";
import goat from "../assets/pictures/goat.png";
import cat from "../assets/pictures/cat.png";
import { withRouter } from "react-router-native";

export default ({ history }) => {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const checkPick = () => {
    if (playerTwo === "") {
      alert("Un des des deux joueurs n'a pas selectionné son personnage");
    }
    if (playerOne === "") {
      alert("Un des des deux joueurs n'a pas selectionné son personnage");
    } else {
      history.push("/");
    }
  };

  console.log("playerone", playerOne);
  console.log("playertwo", playerTwo);
  return (
    <View style={styles.container}>
      <Text style={styles.text} h1>
        Choose your animal
      </Text>
      <View style={styles.playersBox}>
        <View style={styles.playerOne}>
          <Text> Player One</Text>
          <View style={styles.characters}>
            <View>
              <Text
                name="chicken"
                onPress={() =>
                  setPlayerOne({ name: "chicken", picture: { chicken } })
                }
              >
                <Image
                  name="chicken"
                  style={{ width: 70, height: 70 }}
                  source={chicken}
                />
              </Text>
            </View>
            <View>
              <Text
                name="cat"
                onPress={() => setPlayerOne({ name: "cat", picture: { cat } })}
              >
                <Image
                  name="cat"
                  style={{ width: 70, height: 70 }}
                  source={cat}
                />
              </Text>
            </View>
            <View>
              <Text
                name="cat"
                onPress={() =>
                  setPlayerOne({ name: "goat", picture: { goat } })
                }
              >
                <Image style={{ width: 70, height: 70 }} source={goat} />
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.playerTwo}>
          <Text> Player Two</Text>
          <View style={styles.characters}>
            <View>
              <Text
                name="chicken"
                onPress={() =>
                  setPlayerTwo({ name: "chicken", picture: { chicken } })
                }
              >
                <Image
                  name="chicken"
                  style={{ width: 70, height: 70 }}
                  source={chicken}
                />
              </Text>
            </View>

            <View>
              <Text
                name="cat"
                onPress={() => setPlayerTwo({ name: "cat", picture: { cat } })}
              >
                <Image
                  name="cat"
                  style={{ width: 70, height: 70 }}
                  source={cat}
                />
              </Text>
            </View>
            <View>
              <Text
                name="goat"
                onPress={() =>
                  setPlayerTwo({ name: "goat", picture: { goat } })
                }
              >
                <Image style={{ width: 70, height: 70 }} source={goat} />
              </Text>
            </View>
          </View>
          <Text style={styles.buttonCheck} title="Valide" onPress={() => checkPick()}>
                FIGHT !
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonCheck: {
    backgroundColor: "black",
    color: "white",
    fontSize: 40,
  },
  text: {
    fontSize: 30
  },
  container: {
    maxHeight: "100%",
    top: 50,
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
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
    justifyContent: "center"
  }
});
