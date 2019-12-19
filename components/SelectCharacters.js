import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, ImageBackground } from "react-native";
import octopus from "../assets/pictures/card-octopus.jpg";
import unicorn from "../assets/pictures/card-unicorn.jpg";
import cat from "../assets/pictures/card-cat.jpg";
import background from "../assets/pictures/background.jpg"
import { AppLoading } from 'expo';
import * as Font from 'expo-font';


const fetchFonts = () => {
  return Font.loadAsync({
    "Londrina": require('../assets/fonts/LondrinaSolid-Regular.ttf'),
    "IBM": require('../assets/fonts/IBMPlexSans-Bold.ttf')
  });
  };


export default function SelectCharacter ({ history }) {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");



  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      />
    );
  }


  const checkPick = () => {
    if (playerTwo === "") {
      alert("Joueur un n'a pas selectionné son personnage");
    }
    if (playerOne === "") {
      alert("Joueur deux n'a pas selectionné son personnage");
    } else {
      history.push("/");
    }
  };

  console.log("playerone", playerOne);
  console.log("playertwo", playerTwo);
  return (
    <ImageBackground source={background} style={{width: '100%', height: '100%'}} >
    <View style={styles.container}>
      <Text style={styles.title}>
        Choose your animal!
      </Text>
      <View style={styles.playersBox}>
        <View style={styles.playerOne}>
          <Text style={styles.text2}> PLAYER 1</Text>
          <View style={styles.characters}>
            <View>
              <Text
                name="octopus"
                onPress={() =>
                  setPlayerOne({ name: "octopus", picture: { octopus } })
                }
              >
                <Image
                  name="octopus"
                  source={octopus}
                  style={{ width: 100, height: 100 }}
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
                name="unicorn"
                onPress={() =>
                  setPlayerOne({ name: "unicorn", picture: { unicorn } })
                }
              >
                <Image name="unicorn"
                source={unicorn}
                style={{ width: 100, height: 100 }}/>

              </Text>
            </View>
          </View>
        </View>

        <View style={styles.playerTwo}>
          <Text style={styles.text2}> PLAYER 2</Text>
          <View style={styles.characters}>
            <View>
              <Text
                name="octopus"
                onPress={() =>
                  setPlayerTwo({ name: "octopus", picture: { octopus } })
                }
              >
                <Image
                  name="octopus"
                  style={{ width: 100, height: 100 }}
                  source={octopus}
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
                name="unicorn"
                onPress={() =>
                  setPlayerTwo({ name: "unicorn", picture: { unicorn } })
                }
              >
                <Image 
                source={unicorn}
                name="unicorn"
                style={{ width: 100, height: 100 }}/>
                
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
    backgroundColor: "rgb(122, 53, 209)",
    color: "white",
    fontSize: 50,
    fontFamily: "Londrina",
    top: 70,
    padding:7,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:15,
  },
  title: {
    fontSize: 40,
    top: 70,
    textAlign: "center",
    fontFamily: "Londrina",
    color:"rgb(122, 53, 209)",
  },
  text2: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "IBM",
    color:"rgb(122, 53, 209)",
  },
  container: {
    maxHeight: "100%",
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
