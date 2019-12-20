import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, ImageBackground ,TouchableOpacity} from "react-native";
import octopus from "../assets/pictures/card-octopus.jpg";
import unicorn from "../assets/pictures/card-unicorn.jpg";
import cat from "../assets/pictures/card-cat.jpg";
import background from "../assets/pictures/background.jpg"
import { AppLoading, AuthSession } from 'expo';
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
      history.push(`/duel_versus/${playerOne}/${playerTwo}`);
    }
  };


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
            <View  style={styles.intern}>
              <TouchableOpacity
                name="octopus"
                onPress={() =>
                  setPlayerOne( "octopus" )
                }
              >
                <Image
                  name="octopus"
                  source={octopus}
                  style={{  height: 100, width: 100 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.intern}>
              <TouchableOpacity
                name="cat"
                onPress={() => setPlayerOne( "cat" )}
              >
                <Image
                  style={{  height: 100, width: 100}}
                  resizeMode="contain"
                  source={cat}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.intern}>
              <TouchableOpacity
                name="unicorn"
                onPress={() =>
                  setPlayerOne( "unicorn" )
                }
              >
                <Image name="unicorn"
                source={unicorn}
                style={{  height: 100, width: 100 }} resizeMode="contain"/>

              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.playerTwo}>
          <Text style={styles.text2}> PLAYER 2</Text>
          <View style={styles.characters}>
            <View style={styles.intern}>
              <TouchableOpacity 
                name="octopus"
                onPress={() =>
                  setPlayerTwo( "octopus" )
                }
              >
                <Image
                  name="octopus"
                  style={{ width: 100, height: 100 }}
                  source={octopus}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.intern}>
              <TouchableOpacity
                name="cat"
                onPress={() => setPlayerTwo( "cat" )}
              >
                <Image
                  name="cat"
                  style={{ width: 100, height: 100 , top:0}}
                  source={cat}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.intern}>
              <TouchableOpacity
                name="unicorn"
                onPress={() =>
                  setPlayerTwo( "unicorn" )
                }
              >
                <Image 
                source={unicorn}
                name="unicorn"
                style={{ width: 100, height: 100 }}/>

              </TouchableOpacity>
            </View>
          </View>
          
        </View>
        <Text style={styles.buttonCheck} title="Valide" onPress={() => checkPick()}>
                FIGHT !
          </Text>

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
    top: 50,
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
    marginBottom:50,
  },
  text2: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "IBM",
    color:"rgb(122, 53, 209)",
    marginBottom:15,
  },
  container: {
    maxHeight: "100%",
    flex: 1,
    alignItems: "center",
  },
  characters: {
    width: 350,
    height: 400,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",

  },


  playerOne: {
    maxHeight: 200,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  playerTwo: {
    maxHeight: 200,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

  },
  playersBox: {
    flex: 1,
    bottom: "4%",
    alignItems: "center",
    justifyContent: "center"
  }
});
