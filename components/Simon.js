import React, { useState, useEffect } from "react";
import {  View, Text } from "react-native";
import styled from 'styled-components'


const getRandomInt = (max)  =>{
    return Math.floor(Math.random() * Math.floor(max));
  }

const allColors = ['red', 'blue', 'green', 'yellow']

const sequenceInit = [2, 1, 4]

const verifySequence = ({value, sequence, indexInSequence, setIndexInSequence, setMode ,addToSequence,activateSquare}) => {
    if(sequence[indexInSequence] === value) {
        if(!sequence[indexInSequence + 1]){
            console.log('www') //victoire
            addToSequence([ ...sequence, getRandomInt(4)])
            setIndexInSequence(0)
            setMode('listen')
            playSequence(sequence,activateSquare,setMode)
        }
       
        setIndexInSequence(indexInSequence + 1)

        return true
    }
    else {
        //rater
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
        setTimeout(() => {activateSquare(seq)}, intervalTime * delta)
    })
    if(test){
    delta = delta+1
    setTimeout(() => {setMode('play')}, intervalTime * delta )
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

    useEffect(() =>{ 
        console.log(currentSquare)
    })

    const [sequence, addToSequence] = useState(sequenceInit)

    useEffect(() =>{ 
        console.log(sequence)

    },[sequence])

    const [mode, setMode] = useState('idle')
    useEffect(() => {
        console.log(mode)
        activateSquare(0)
        
    },[mode] )

    const [indexInSequence, setIndexInSequence] = useState(0)
    useEffect(() => {
        console.log(indexInSequence)
        activateSquare(0)
        
    },[indexInSequence] )

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
                return 'Appui sur commencer pour commencer'
            default:
                break;
        }
    }

    return (
        <View  >
            <Text >Player ?</Text>
            <Text onPress={() => fillTab1()}>Remplir tableau aléatoire</Text>
            <Text>This is your challenge :</Text>
            <Text>Niveau : {sequence.length - 2}</Text>
            <Text>{displayMessage(mode)}</Text>
            <SquareContainer >
            <SquareRow>
                <Square onPress={mode ==="play" ? () => verifySequence({value:1,sequence, indexInSequence, setIndexInSequence, setMode,addToSequence, activateSquare}) : null} color={allColors[0]} isActivated={currentSquare === 1} />
                <Square onPress={mode ==="play" ? () => verifySequence({value:2,sequence, indexInSequence, setIndexInSequence, setMode,addToSequence, activateSquare}) : null}  color={allColors[1]} isActivated={currentSquare === 2}/>
                </SquareRow>
                <SquareRow>
                <Square onPress={mode ==="play" ? () => verifySequence({value:3,sequence, indexInSequence, setIndexInSequence, setMode,addToSequence, activateSquare}) : null}  color={allColors[2]} isActivated={currentSquare === 3}/>
                <Square onPress={mode ==="play" ? () => verifySequence({value:4,sequence, indexInSequence, setIndexInSequence, setMode,addToSequence, activateSquare}) : null}  color={allColors[3]} isActivated={currentSquare === 4}/>
                </SquareRow>
            </SquareContainer>
            <StartButton onPress={() => playSequence(sequence, activateSquare,setMode)}>
            <CommonTextButton>Allumer le tableau</CommonTextButton>
            </StartButton>
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
max-height: 50%;
`

const CommonTextButton = styled.Text`
    font-size: 24px;
    color: white
`

const StartButton = styled.TouchableOpacity`
    padding:12px;
    background-color: #f5a4b0
    border-radius: 12px;
`

const Square = styled.TouchableOpacity`
    background-color: ${props => props.isActivated ? props.color : 'grey'};
    margin: 3px;
    min-width: 150px;

    min-height: 50px;
`
