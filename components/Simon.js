import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const styles = StyleSheet.create({


    player: {
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
    },
    colorTop: {
        flexDirection: 'row',

    },
    colorBottom: {
        flexDirection: 'row'
    },
    blue: {
        padding: 90,
        margin: 5,
        backgroundColor: 'rgba(72,238,255, 1)'
    },
    blueLight: {
        padding: 90,
        margin: 5,
        backgroundColor: 'rgba(72,238,255,0.5)'
    },

    yellow: {
        padding: 90,
        margin: 5,
        backgroundColor: 'rgba(255,207,55, 1)'
    },
    yellowLight: {
        padding: 90,
        margin: 5,
        backgroundColor: 'rgba(255,207,55, 0.5)'
    },
    
    red: {
        padding: 90,
        margin: 5,
        backgroundColor: 'rgba(250,73,110, 1)'
    },
    redLight: {
        padding: 90,
        margin: 5,
        backgroundColor: 'rgba(250,73,110, 0.5)'
    },

    green: {
        padding: 90,
        margin: 5,
        backgroundColor: 'rgba(122,53,209, 1)'
    },
    greenLight: {
        padding: 90,
        margin: 5,
        backgroundColor: 'rgba(122,53,209, 0.5)'
    },
    challenge: {
        fontSize: 40
    }
})

export default ({ history }) => {
    const [blueLighter, setBlueLighter] = useState(false);
    const [yelloLighter, setYellowLighter] = useState(false);
    const [greenLighter, setGreenLighter] = useState(false);
    const [redLighter, setRedLighter] = useState(false);

    return(

    <View style={styles.container} >
        <Text style={styles.player}>Player ?</Text>
        <Text style={styles.challenge}>This is your challenge :</Text>
        <View style={styles.colorTop}>
            
            <View style={blueLighter ? styles.blueLight : styles.blue} >
            </View>
            
            <View style={redLighter ? styles.redLight : styles.red}>
            </View>
        </View>
        <View style={styles.colorBottom}>
            <View style={yelloLighter ? styles.yellowLight : styles.yellow}>
            </View>
            <View style={greenLighter ? styles.greenLight : styles.green}>
            </View>
        </View>
        <Text onPress={() => setBlueLighter(!blueLighter)}>Bonjour TABLEAU BITCH</Text>

        {/* onPress={() => setPlayerOne({ name: "cat", picture: { cat } })} */}
    </View>
    )



};
