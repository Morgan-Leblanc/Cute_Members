import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity,  ImageBackground } from "react-native";
import homepage from "../assets/images/homepage.jpg"
import { AppLoading, AuthSession } from 'expo';
import { Audio } from 'expo-av';
import * as Font from 'expo-font';
// var Sound = require('react-native-sound');
// import Sound from 'react-native-sound';


const fetchFonts = () => {
  return Font.loadAsync({
    Londrina: require("../assets/fonts/LondrinaSolid-Regular.ttf"),
    IBM: require("../assets/fonts/IBMPlexSans-Bold.ttf")
  });
};





const soundObject = new Audio.Sound();
try {
  await soundObject.loadAsync(require('../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3'));
  await soundObject.playAsync();
  // Your sound is playing!
} catch (e) {
  console.log(`cannot play the sound file`, e)
}

 
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

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }



  // const soundObject = new Expo.Audio.Sound();

  // try {
  //   soundObject.loadAsync(require('../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3'));
  //   soundObject.playAsync();
  //   // Your sound is playing!
  // } catch (error) {
  //   console.log(error)// An error occurred!
  // }



// sound = new Sound('../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3');

//     playSound = () => {
//         sound.play()
//     }


  // const filepath = '../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3';
// const currentAudio = new Sound(filepath);
// currentAudio.setCategory('Playback');




  // const [soundLoaded, setSoundLoaded] = useState(false);
  // if (!soundLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchSound}
  //       onFinish={() => setSoundLoaded(true)}
  //     />
  //   );
  // }






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
    {/* <Video source={{uri: './assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3'}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       rate={1.0}                              // 0 is paused, 1 is normal.
       volume={1.0}                            // 0 is muted, 1 is normal.
       muted={false}                           // Mutes the audio entirely.
       paused={false}                          // Pauses playback entirely.
       resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
       repeat={true}                           // Repeat forever.
       playInBackground={true}                // Audio continues to play when app entering background.
       playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
       ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
       progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
       onLoadStart={this.loadStart}            // Callback when video starts to load
       onLoad={this.setDuration}               // Callback when video loads
       onProgress={this.setTime}               // Callback every ~250ms with currentTime
       onEnd={this.onEnd}                      // Callback when playback finishes
       onError={this.videoError}               // Callback when video cannot be loaded
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
       style={styles.backgroundVideo} /> */}
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
