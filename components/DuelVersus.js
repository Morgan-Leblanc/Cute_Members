import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground,TouchableOpacity } from "react-native";
import playerOneLifePicture from "../assets/icons/3-hearts.png";
import playerTwoLifePicture from "../assets/icons/3-hearts.png";
import playerOnePicture from "../assets/pictures/card-unicorn.jpg";
import playerTwoPicture from "../assets/pictures/card-octopus.jpg";
import background from "../assets/pictures/background.jpg";
import { AppLoading, AuthSession } from 'expo';
import * as Font from 'expo-font';
import { Redirect } from "react-router-native";
import { withTheme } from "styled-components";

const fetchFonts = () => {
    return Font.loadAsync({
        "Londrina": require('../assets/fonts/LondrinaSolid-Regular.ttf'),
        "IBM": require('../assets/fonts/IBMPlexSans-Bold.ttf')
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
        <ImageBackground source={background} style={{width: '100%', height: '100%'}} >
            <View style={styles.versusContainer}>
                <View style={styles.versusPlayersLife} >
                    <View style={styles.versusPlayerOne} >
                        <Text style={styles.versusPlayersText} >
                            PLAYER 1
                        </Text>
                        <Image style={{ width: 180, height: 70 }} source={playerOneLifePicture} />
                    </View>
                    <View style={styles.versusPlayerTwo} >
                        <Text style={styles.versusPlayersText} >
                            PLAYER 2
                        </Text>
                        <Image style={{ width: 180, height: 70 }} source={playerTwoLifePicture} />
                    </View>
                </View>
                <View style={styles.versusRoundAndPlayersInfo} >
                    <Text style={styles.versusRound} >
                        {/* {roundNumber} */} ROUND 1
                    </Text>
                    <View style={styles.versusPlayersInfo}>
                        <View style={styles.versusInfo} >
                            <Image style={{ width: 160, height: 160 }} source={playerOnePicture} />
                            <Text style={styles.versusPlayerTextImage} >
                                PLAYER 1
                            </Text>
                        </View>
                        <View style={styles.versusInfo} >
                            <Image style={{ width: 160, height: 160 }} source={playerTwoPicture} />
                            <Text style={styles.versusPlayerTextImage} >
                                PLAYER 2
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonPlay} onPress={() => history.push("/simon_game")}>
                     <Text style={styles.textButton}>FIGHT !</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    versusContainer: {
        margin: 0,
        flex: 1,
        flexDirection: "column",
    },
    versusPlayersLife: {
        margin: 5,
        flex: 1,
        flexDirection: "row",
        maxHeight: "18%",
    },
    versusPlayerOne: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        width: "100%"
    },
    versusPlayersText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "IBM",
        color:"rgb(122, 53, 209)",
        width: "100%"
    },
    versusPlayerTwo: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    versusRoundAndPlayersInfo: {
        height: "100%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    versusRound: {
        width: "100%",
        paddingTop: "30%",
        fontSize: 40,
        fontFamily: "IBM",
        color:"rgb(122, 53, 209)",
        textAlign: "center"
    },
    versusPlayersInfo: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        maxHeight: "50%",
        justifyContent: "space-evenly",
        alignItems: "center"    
    },
    versusPlayerTextImage: {
        margin: 0,
        fontSize: 25,
        fontFamily: "IBM",
        color:"rgb(122, 53, 209)",
        textAlign: "center",
        top: 15
    },
    buttonPlay: {
        backgroundColor: "rgb(122, 53, 209)",
        color:"white",
        // top: 450,
        padding:7,
        paddingLeft:55,
        paddingRight:55,
        borderRadius:15,
        paddingHorizontal: 20,
      },
      textButton : {
        color: "white",
        fontSize: 50,
        fontFamily: "Londrina",
      },

})
