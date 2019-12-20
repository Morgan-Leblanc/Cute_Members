import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
// import { TouchableHighlight } from "react-native-gesture-handler";
import styled from 'styled-components'



const Simon = ({ history }) => {
// state //
    const [colorRed, setColorRed] = useState({
        color : null
    });
    const [colorblue, setColorBlue] = useState({
        color : null
    });
    

    const [colors, setColors] = useState(['blue', 'red', 'yellow', 'green'])
    const [tab1, setTab1] = useState([])

    useEffect( () => {
        setColor('blue')
        
        console.log('useEffect')
        const timer = setTimeout(() => setColorRed({color: colorRed.color}), 100)
        return () => {
            clearTimeout(timer)
        }
    }, [colorRed])

// Algo pour générer un tableau aléatoire // 
// ici on récupère à la place de i < x le montant du slider passé en props //
const fillTab1 = () => {
    const tabTmp = []
    for (i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * colors.length)
        tabTmp.push(colors[index])

    }
    setTab1(tabTmp)
}


const colorsLighter = () => {
    setColor({color: 'white'})
}
    return (
        <View >
             <Text >Player ?</Text>
             <Text onPress={fillTab1}>Remplir tableau aléatoire</Text>
             <Text >This is your challenge :</Text>
             <View >
          <SquareRed colorRed={colorRed.color} />
          <SquareBlue color={color.color} />
             </View>
             <Text onPress={colorsLighter}>Allumer le tableau</Text>
         </View >
    )
};

const SquareRed = styled.View`
    backgroundColor: ${props => (props.color ? props.color : 'red')};
    padding: 90px;
    margin: 5px;
`
const SquareBlue = styled.View`
    backgroundColor: ${props => (props.color ? props.color : 'blue')};
    padding: 90px;
    margin: 5px;
`
export default Simon
