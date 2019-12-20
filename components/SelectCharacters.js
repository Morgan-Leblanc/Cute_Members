import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, ImageBackground } from "react-native";
import chicken from "../assets/pictures/card-octopus.jpg";
import goat from "../assets/pictures/card-unicorn.jpg";
import cat from "../assets/pictures/card-cat.jpg";
import background from "../assets/pictures/background.jpg"





export default ({ history }) => {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const checkPick = () => {
    if (playerTwo === "") {
      alert("Joueur un  n'a pas selectionné son personnage");
    }
    if (playerOne === "") {
      alert("Joueurs deux n'a pas selectionné son personnage");
    } else {
      history.push("/duel");
    }
  };

  console.log("playerone", playerOne);
  console.log("playertwo", playerTwo);
  return (
    <ImageBackground source={background} style={{width: '100%', height: '100%'}} >
    <View style={styles.container}>
      <Text style={{fontFamily:"IBM"}} style={styles.text} h1>
        Choose your animal
      </Text>
      <View style={styles.playersBox}>
        <View style={styles.playerOne}>
          <Text style={styles.text}> Player One</Text>
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
                  style={{ width: 100, height: 100 }}
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
                  style={{ width: 100, height: 100 }}
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
                <Image style={{ width: 100, height: 100 }} source={goat} />
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.playerTwo}>
          <Text style={styles.text}> Player Two</Text>
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
                  style={{ width: 100, height: 100 }}
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
                  style={{ width: 100, height: 100 }}
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
                <Image style={{ width: 100, height: 100 }} source={goat} />
              </Text>
            </View>
          </View>
          <Text style={styles.buttonCheck} title="Valide" onPress={() => checkPick()}>
                FIGHT !
          </Text>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  buttonCheck: {
    backgroundColor: "black",
    color: "white",
    fontSize: 40,
  },
  text: {
    fontSize: 30,
  },
  container: {
    maxHeight: "100%",
    top: 50,
    flex: 1,
    alignItems: "center"
  },
  characters: {
    maxHeight: 140,
    width: 350,
    flex: 1,
    flexDirection: "row",
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
