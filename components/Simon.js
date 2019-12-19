import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import styled from 'styled-components'



export default ({ history }) => {
// state //
    const [color, setColor] = useState({
        color : null
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

    const [colors, setColors] = useState(['blue', 'red', 'yellow', 'green'])
    const [tab1, setTab1] = useState([])

    useEffect( () => {
        console.log('useEffect')
        setColor('blue')
        const timer = setTimeout(() => setColor(null), 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [])

// Algo pour générer un tableau aléatoire // 
// ici on récupère à la place de i < x le montant du slider passé en props //
fillTab1 = () => {
    const tabTmp = []
    for (i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * colors.length)
        tabTmp.push(colors[index])
        // console.log("tab 1 final", tab1)
        // console.log("colors index", colors[index])
    }
    setTab1(tabTmp)
}


// Algo pour jouer les couleurs du tableau aléatoire //
colorsLighter =  ()  => {
    tab1.map(color => {
        console.log('bonjour',blueLighter.color , color)
        setBlueLighter({...blueLighter, boolean: !blueLighter.boolean});
        
        if(blueLighter.color == color){
            let i = 0
            console.log("ici");
            // setInterval(()=> {
                // i++
                // if(true){
                    while(i < 2)
                    {
                        
                        setBlueLighter({...blueLighter, boolean: !blueLighter.boolean})
                        i++
                    }
                    // console.log(blueLighter.boolean)
                    console.log("ici 1");
                    // }
                    // }, 1000);
                    // clearInterval(x)
                    // setBlueLighter({...blueLighter, boolean: false})
                    
                }
            } )
         
}

   // console.log(i,blueLighter );
            // tab1.map(async color => {
                //     console.log('elemennt color',color)
                //     if (color === blueLighter.color) {
                    //         console.log();
            
    //         await setTimeout(() => setBlueLighter(blueLighter.boolean = !blueLighter.boolean),2000)
    //         console.log('state blue',blueLighter.boolean)
    //         setTimeout(() => setBlueLighter(blueLighter.boolean = !blueLighter.boolean),2000)
    //         console.log('state blue',blueLighter.boolean)

    //     }
    //     else if (color === yellowLighter.color) {
    //         await setTimeout(() => setYellowLighter(yellowLighter.boolean = !yellowLighter.boolean),2000)
    //         console.log('state blue',yellowLighter.boolean)

    //         setTimeout(() => setYellowLighter(yellowLighter.boolean = !yellowLighter.boolean),2000)
    //         console.log('state blue',yellowLighter.boolean)

    //     }
    //     else if (color === greenLighter.color) {
    //         await setTimeout(() => setGreenLighter(greenLighter.boolean = !greenLighter.boolean),2000)
    //         console.log('state blue',greenLighter.boolean)
    //         setTimeout(() => setGreenLighter(greenLighter.boolean = !greenLighter.boolean),2000)   
    //         console.log('state blue',greenLighter.boolean)
    //       }
    //     else if (color === redLighter.color) {
    //         await setTimeout(() => setRedLighter(redLighter.boolean = !redLighter.boolean),2000)
    //         console.log('state blue',redLighter.boolean)
    //         setTimeout(() => setRedLighter(redLighter.boolean = !redLighter.boolean),2000)   
    //         console.log('state blue',redLighter.boolean)
    //        }
    // })
    

 console.log('salut',tab1)

    return (
        <View style={styles.container} >
            <Text style={styles.player}>Player ?</Text>
            <Text onPress={() => fillTab1()}>Remplir tableau aléatoire</Text>
            {/* <Text > bool {blueLighter.boolean.toString()}</Text> */}
            <Text style={styles.challenge}>This is your challenge :</Text>
            <View style={styles.colorTop}>
                <Square color={color} />
                {/* <View style={blueLighter.boolean ? styles.blueLight : styles.blue} > */}
                {/* <View style={} >

                </View> */}

                {/* <View style={redLighter.boolean ? styles.redLight : styles.red}> */}
                {/* </View> */}
            {/* </View> */}
            {/* <View style={styles.colorBottom}> */}
                {/* <View style={yellowLighter.boolean ? styles.yellowLight : styles.yellow}> */}
                {/* </View> */}
                {/* <View style={greenLighter.boolean ? styles.greenLight : styles.green}> */}
                {/* </View> */}
            </View>



            <Text onPress={colorsLighter}>Allumer le tableau</Text>


        </View >
    )



};

const Square = styled.div`
    background-color: ${props => (props => (props.color ? props.color : 'rgba(72,238,255, 1)'))};
    padding: 90;
    margin: 5;
`

// const styles = StyleSheet.create({


//     player: {
//         fontSize: 60,
//         textAlign: 'center',
//         bottom: 50,
//         fontWeight: 'bold'
//     },
//     button: {
//         fontSize: 60,
//         color: "white",
//         backgroundColor: "black",
//         top: 70,
//         paddingHorizontal: 20,
//         borderRadius: 20
//     },
//     container: {
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     colorTop: {
//         flexDirection: 'row',

//     },
//     colorBottom: {
//         flexDirection: 'row'
//     },
//     blue: {
//         padding: 90,
//         margin: 5,
//         backgroundColor: props => (styles.blue : 'rgba(72,238,255, 1)'
//     },
//     blueLight: {
//         padding: 90,
//         margin: 5,
//         backgroundColor: 'rgba(255,207,55, 1)'

//         // backgroundColor: 'rgba(72,238,255,0.5)'
//     },

//     yellow: {
//         padding: 90,
//         margin: 5,
//         backgroundColor: 'rgba(255,207,55, 1)'
//     },
//     yellowLight: {
//         padding: 90,
//         margin: 5,
//         backgroundColor: 'rgba(255,207,55, 0.5)'
//     },

//     red: {
//         padding: 90,
//         margin: 5,
//         backgroundColor: 'rgba(250,73,110, 1)'
//     },
//     redLight: {
//         padding: 90,
//         margin: 5,
//         backgroundColor: 'rgba(250,73,110, 0.5)'
//     },

//     green: {
//         padding: 90,
//         margin: 5,
//         backgroundColor: 'rgba(122,53,209, 1)'
//     },
//     greenLight: {
//         padding: 90,
//         margin: 5,
//         backgroundColor: 'rgba(122,53,209, 0.5)'
//     },
//     challenge: {
//         fontSize: 40
//     }
// })