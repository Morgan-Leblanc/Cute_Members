import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import styled from 'styled-components'


const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const allColors = ['rgb(250, 73, 110)', 'rgb(72, 238,  255)', 'rgb(122, 53, 209)', 'rgb(255 ,207, 55)',]

// const sequenceInit = [2, 1, 4]

const sequenceInit = () => {
    const numbers = [1, 2, 3, 4]
    const tabTmp = []
    for (i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * numbers.length)
        tabTmp.push(numbers[index])
    }
    return tabTmp
}

const verifySequence = ({ value, sequence, indexInSequence, setIndexInSequence, setMode, addToSequence, activateSquare }) => {
    if (sequence[indexInSequence] === value) {
        if (!sequence[indexInSequence + 1]) {
            console.log('www') //victoire
            addToSequence([...sequence, getRandomInt(4)])
            setIndexInSequence(0)
            setMode('listen')
            playSequence(sequence, activateSquare, setMode)
        }
        // setIndexInSequence(indexInSequence + 1)
        return true
    }
    else {
        //rateractivateSquare
        console.log('loser') //défaite

        setIndexInSequence(0)
        setMode('idle')
        return false
    }
}

const playSequence = async (sequence, activateSquare, setMode) => {
    const intervalTime = 800
    let delta
    setMode('listen')
    const test = sequence.map((seq, index) => {
        delta = index + 1
        setTimeout(() => { activateSquare(seq) }, intervalTime * delta)
    })
    if (test) {
        delta = delta + 1
        setTimeout(() => { setMode('play') }, intervalTime * delta)
    }
}

export default ({ history }) => {
    // const [color, setColor] = useState({
    //     color : null
    // });
    // useEffect( () => {
    //     setColor('blue')
    //     const timer = setTimeout(() => setColor(null), 1000)
    //     return () => {
    //         clearTimeout(timer)
    //     }
    // }, [])
    const [currentSquare, activateSquare] = useState(0)

    useEffect(() => {
        console.log(currentSquare)
    })

    const [sequence, addToSequence] = useState(sequenceInit)

    useEffect(() => {
        console.log('sequence', sequence)

    }, [sequence])

    const [mode, setMode] = useState('idle')
    useEffect(() => {
        console.log(mode)
        activateSquare(0)

    }, [mode])

    const [indexInSequence, setIndexInSequence] = useState(0)
    useEffect(() => {
        console.log(indexInSequence)
        activateSquare(0)

    }, [indexInSequence])

    // Algo pour générer un tableau aléatoire // 
    // ici on récupère à la place de i < x le montant du slider passé
    //  en props //

    // Algo pour jouer les couleurs du tableau aléatoire //
    const displayMessage = (value) => {
        switch (value) {
            case 'play':
                return 'A Toi de jouer !'
            case 'listen':
                return 'Regarde La Sequence'
            case 'idle':
                return 'Retiens cette combinaison :'
            default:
                break;
        }
    }

    return (
        <View >
            <Text >Player 1 : Your turn!</Text>
            <Text>{displayMessage(mode)}</Text>
            <StartButton onPress={() => playSequence(sequence, activateSquare, setMode)}>
                <CommonTextButton>GO!</CommonTextButton>
            </StartButton>
            <SquareContainer >
                <SquareRow>
                    <Square1 onPress={mode === "play" ? () => verifySequence({ value: 1, sequence, indexInSequence, setIndexInSequence, setMode, addToSequence, activateSquare }) : null} color={allColors[0]} isActivated={currentSquare === 1} />
                    <Square2 onPress={mode === "play" ? () => verifySequence({ value: 2, sequence, indexInSequence, setIndexInSequence, setMode, addToSequence, activateSquare }) : null} color={allColors[1]} isActivated={currentSquare === 2} />
                </SquareRow>
                <SquareRow>
                    <Square3 onPress={mode === "play" ? () => verifySequence({ value: 3, sequence, indexInSequence, setIndexInSequence, setMode, addToSequence, activateSquare }) : null} color={allColors[2]} isActivated={currentSquare === 3} />
                    <Square4 onPress={mode === "play" ? () => verifySequence({ value: 4, sequence, indexInSequence, setIndexInSequence, setMode, addToSequence, activateSquare }) : null} color={allColors[3]} isActivated={currentSquare === 4} />
                </SquareRow>
            </SquareContainer>
        </View >
    )
};

const SquareRow = styled.View`
flex-direction:row;
flex:1;
`

const SquareContainer = styled.View`
flex-wrap: wrap;
flex:1;
max-height: 65%;
`
const CommonTextButton = styled.Text`
    font-size: 24px;
    color: white
    text-align: center;

`
const StartButton = styled.TouchableOpacity`
    padding:12px;
    background-color: pink
    border-radius: 12px;
`
const Square1 = styled.TouchableOpacity`
        background-color: ${props => props.isActivated ? 'whitesmoke' : props.color};
        margin: 3px;
        min-width: 150px;
        min-height: 50px;
    `
const Square2 = styled.TouchableOpacity`
    background-color: ${props => props.isActivated ? 'whitesmoke' : props.color};
    margin: 3px;
    min-width: 150px;
    min-height: 50px;
`
const Square3 = styled.TouchableOpacity`
        background-color: ${props => props.isActivated ? 'whitesmoke' : props.color};
        margin: 3px;
        min-width: 150px;
        min-height: 50px;
    `

const Square4 = styled.TouchableOpacity`
        background-color: ${props => props.isActivated ? 'whitesmoke' : props.color};
        margin: 3px;
        min-width: 150px;
        min-height: 50px;
    `