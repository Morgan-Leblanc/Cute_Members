import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import playerOneLifePicture from "../assets/icons/3-hearts.png";
import playerTwoLifePicture from "../assets/icons/1-heart-zombie.png";
import playerOnePicture from "../assets/pictures/card-unicorn.jpg";
import playerTwoPicture from "../assets/pictures/card-octopus.jpg";
import background from "../assets/pictures/background.jpg"

export default ({ history }) => {

    return (
        <ImageBackground source={background} style={{width: '100%', height: '100%'}} >
            <View style={styles.versusContainer}>
                <View style={styles.versusPlayersLife} >
                    <View style={styles.versusPlayerOne} >
                        <Text style={styles.versusPlayerOneText} >
                            Player 1
                        </Text>
                        <Image style={{ width: 180, height: 70 }} source={playerOneLifePicture} />
                    </View>
                    <View style={styles.versusPlayerTwo} >
                        <Text style={styles.versusPlayerTwoText} >
                            Player 2
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
                                Player 1
                            </Text>
                        </View>
                        <View style={styles.versusInfo} >
                            <Image style={{ width: 160, height: 160 }} source={playerTwoPicture} />
                            <Text style={styles.versusPlayerTextImage} >
                                Player 2
                            </Text>
                        </View>
                    </View>
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
        justifyContent: "space-between",
        maxHeight: "18%"
    },
    versusPlayerOne: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center"
    },
    versusPlayerOneText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    versusPlayerTwo: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    versusPlayerTwoText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        width: "100%"
    },
    versusRoundAndPlayersInfo: {
        margin: 0,
        height: "100%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    versusRound: {
        width: "100%",
        paddingTop: "30%",
        fontSize: 40,
        fontWeight: "bold",
        color: "purple",
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
        textAlign: "center",
        top: 15
    },

})
