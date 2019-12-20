import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity,  ImageBackground } from "react-native";
import homepage from "../assets/images/homepage.jpg"
import { AppLoading, AuthSession } from 'expo';
// import { Audio } from 'expo-av';
import * as Font from 'expo-font';
// var Sound = require('react-native-sound');
// import Sound from 'react-native-sound';


const fetchFonts = () => {
  return Font.loadAsync({
    Londrina: require("../assets/fonts/LondrinaSolid-Regular.ttf"),
    IBM: require("../assets/fonts/IBMPlexSans-Bold.ttf")
  });
};



// const soundObject = new Audio.Sound();
// try {
//   await soundObject.loadAsync(require('./assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3'));
//   await soundObject.playAsync();
//   // Your sound is playing!
// }

// const soundObject = new Audio.Sound();
// try {
//   await soundObject.loadAsync(require('../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3'));
//   await soundObject.playAsync();
//   // Your sound is playing!
// } catch (e) {
//   console.log(`cannot play the sound file`, e)
// }

 
// try {
//     // play the file tone.mp3
//     SoundPlayer.playSoundFile('../assets/musics/ES_Just So Happy for You - Josef Bel Habib', 'mp3')
//     // or play from url
//     // SoundPlayer.playUrl('https://example.com/music.mp3')
// } catch (e) {
//     console.log(`cannot play the sound file`, e)
// }



export default ({ history }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  // const [soundLoaded, setSoundLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }




  // const [soundLoaded, setSoundLoaded] = useState(false);
  // if (!soundLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchSound}
  //       onFinish={() => setSoundLoaded(true)}
  //     />
  //   );
  // }

// const filepath = '../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3';
// const currentAudio = new Sound(filepath);
// currentAudio.setCategory('Playback');


// sound = new Sound('../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3');

//     playSound = () => {
//         sound.play()
//     }



  // try {
  //   await soundObject.loadAsync(require('../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3'));
  //   await soundObject.playAsync();
  //   // Your sound is playing!
  // } catch (e) {
  //   console.log(`cannot play the sound file`, e)
  // }

  


  return (

  <ImageBackground source={homepage} style={{width: '100%', height: '100%'}} >
    <View style={styles.container}>
        {/* <Text style={styles.title}>CUT(e) MEMBERS</Text> */}
        <TouchableOpacity style={styles.buttonPlay} onPress={() => history.push("/newgame")}>
          <Text style={styles.textButton}>PLAY</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.buttonPlay} onPress={() => playSound()}>
          <Text style={styles.textButton}>SOUND</Text>
        </TouchableOpacity> */}
    </View>
  </ImageBackground>

  )
};


const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    textAlign: "center",
    bottom: 50,
    fontWeight: "bold"
  },
  textButton : {
    color: "white",
    fontSize: 50,
    fontFamily: "Londrina",
  },

  buttonPlay: {
    backgroundColor: "rgb(122, 53, 209)",
    top: 450,
    padding:7,
    paddingLeft:55,
    paddingRight:55,
    borderRadius:15,
    paddingHorizontal: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});
