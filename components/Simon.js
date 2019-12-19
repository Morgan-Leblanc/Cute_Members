import React from "react";
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
        backgroundColor: "blue"
    },
    yellow: {
        padding: 90,
        margin: 5,

        backgroundColor: "yellow"
    }, red: {
        padding: 90,
        margin: 5,

        backgroundColor: "red"
    },
    green: {
        padding: 90,
        margin: 5,
        backgroundColor: "green"
    },
    green: {
        padding: 90,
        margin: 5,
        backgroundColor: "green"
    },
    challenge: {
        fontSize: 40
    }
})

const colors = [ 'blue', 'red', 'yellow', 'green']
const tab1 = []

// ici on récupère à la place du 7 le montant du slider passé en props //
fillTab1 = () => {
    for (i=0; i < 7 ; i++) {
    const index = Math.floor(Math.random() * colors.length)
    tab1.push(colors[index]) 
    console.log(tab1)
    }
    console.log("tab 1 final", tab1)
}

console.log(tab1)

export default ({ history }) => {
    return (
    <View style={styles.container} >
        <Text style={styles.player}>Player ?</Text>
        <Text style={styles.challenge}>This is your challenge :</Text>
        <View style={styles.colorTop}>
            <View style={styles.blue} >
            </View>
            <View style={styles.red}>
            </View>
        </View>
        <View style={styles.colorBottom}>
            <View style={styles.yellow}>
            </View>
            <View style={styles.green}>
            </View>
        </View>
        <Text onPress={() => fillTab1()}>Bonjour TABLEAU BITCH</Text>
    </View>
    )

};
