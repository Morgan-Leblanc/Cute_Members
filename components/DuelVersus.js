import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import playerOneLifePicture from "../assets/pictures/goat.png";
import playerTwoLifePicture from "../assets/pictures/cat.png";
import playerOnePicture from "../assets/pictures/goat.png";
import playerTwoPicture from "../assets/pictures/chicken.png";


export default ({ history }) => {

    return (
        <View style={styles.versusContainer}>
            <View style={styles.versusPlayersLife} >
                <View style={styles.versusPlayerOne} >
                    <Text style={styles.versusPlayerOneText} >
                        Player 1
                    </Text>
                    <Image style={{ width: 70, height: 70 }} source={playerOneLifePicture} />
                </View>
                <View style={styles.versusPlayerTwo} >
                    <Text style={styles.versusPlayerTwoText} >
                        Player 2
                    </Text>
                    <Image style={{ width: 70, height: 70 }} source={playerTwoLifePicture} />
                </View>
            </View>
            <View style={styles.versusPlayersInfo} >
                <Text style={styles.versusRound} >
                    {/* {roundNumber} */} Round 1
                </Text>
                <View style={styles.versusInfo} >
                    <View style={styles.versusPlayerOneChar} >
                        <Image style={{ width: 70, height: 70 }} source={playerOnePicture} />
                        <Text style={styles.versusPlayerTextImage} >
                            Player 1
                        </Text>
                    </View>
                </View>
                <View style={styles.versusInfo} >
                    <View style={styles.versusPlayerTwoChar} >
                        <Image style={{ width: 70, height: 70 }} source={playerTwoPicture} />
                        <Text style={styles.versusPlayerTextImage} >
                            Player 2
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    versusContainer: {
        margin: 0,
        backgroundColor: "pink",
    },
    versusPlayersLife: {
        margin: 0
    },
    versusPlayerOne: {
        margin: 0
    },
    versusPlayerOneText: {
        margin: 0
    },
    versusPlayerTwo: {
        margin: 0
    },
    versusPlayerTwoText: {
        margin: 0
    },
    versusPlayersInfo: {
        margin: 0
    },
    versusPlayerOneChar: {
        margin: 0
    },
    versusPlayerTextImage: {
        margin: 0
    },
    versusPlayerTwoChar: {
        margin: 0
    },

})
