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

export default ({ history }) => (
    <View style={styles.container} >
        <Text style={styles.player}>Player ?</Text>
        <Text style={styles.challenge}>This is your challenge :</Text>
        <View style={styles.colorTop}>
            <TouchableHighlight>
            <View style={styles.blue} >
            </View>
            </TouchableHighlight>
            <View style={styles.red}>
            </View>
        </View>
        <View style={styles.colorBottom}>
            <View style={styles.yellow}>
            </View>
            <View style={styles.green}>
            </View>
        </View>
    </View>


);
