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
// state //
    const [blueLighter, setBlueLighter] = useState({
        boolean :false,
        color : "blue"
    });
    const [yellowLighter, setYellowLighter] = useState({
        boolean :false,
        color : "yellow"
    });;
    const [greenLighter, setGreenLighter] = useState({
        boolean :false,
        color : "green"
    });;
    const [redLighter, setRedLighter] = useState({
        boolean :false,
        color : "red"
    });;

// Algo pour générer un tableau aléatoire // 
const colors = ['blue', 'red', 'yellow', 'green']
const tab1 = []
// ici on récupère à la place du 7 le montant du slider passé en props //
fillTab1 = () => {
    for (i = 0; i < 7; i++) {
        const index = Math.floor(Math.random() * colors.length)
        tab1.push(colors[index])
        console.log("tab 1 final", tab1)

    }
    return tab1
}

// Algo pour jouer les couleurs du tableau aléatoire //
colorsLighter = () => {
    console.log('bonjour')
    tab1.map(color => {
        console.log('elemennt color',color)
        if (color === blueLighter.color) {
            setTimeout(() => setBlueLighter(blueLighter.boolean = !blueLighter.boolean,2000))
            console.log('state blue',blueLighter.boolean)

            setTimeout(() => setBlueLighter(blueLighter.boolean = !blueLighter.boolean,2000))
            console.log('state blue',blueLighter.boolean)

        }
        else if (color === yellowLighter.color) {
            setTimeout(() => setYellowLighter(yellowLighter.boolean = !yellowLighter.boolean,2000))
            setTimeout(() => setYellowLighter(yellowLighter.boolean = !yellowLighter.boolean,2000))

        }
        else if (color === greenLighter.color) {
            setTimeout(() => setGreenLighter(greenLighter.boolean = !greenLighter.boolean,2000))
            setTimeout(() => setGreenLighter(greenLighter.boolean = !greenLighter.boolean,2000))      
          }
        else {
            setTimeout(() => setRedLighter(redLighter.boolean = !redLighter.boolean,2000))
            setTimeout(() => setRedLighter(redLighter.boolean = !redLighter.boolean,2000))     
           }
    })
}

 console.log(tab1)
    return (
        <View style={styles.container} >
            <Text style={styles.player}>Player ?</Text>
            <Text onPress={() => fillTab1()}>Remplir tableau aléatoire</Text>

            <Text style={styles.challenge}>This is your challenge :</Text>
            <View style={styles.colorTop}>

                <View style={blueLighter ? styles.blueLight : styles.blue} >
                </View>

                <View style={redLighter ? styles.redLight : styles.red}>
                </View>
            </View>
            <View style={styles.colorBottom}>
                <View style={yellowLighter ? styles.yellowLight : styles.yellow}>
                </View>
                <View style={greenLighter ? styles.greenLight : styles.green}>
                </View>
            </View>



            <Text onPress={() => colorsLighter()}>Allumer le tableau</Text>


        </View >
    )



};
