import React, { useState , useEffect} from "react";
import { StyleSheet, View, Text, Image, Button, TouchableOpacity,  TouchableHighlight, ImageBackground } from "react-native";
import homepage from "../assets/images/homepage.jpg"
import speaker from "../assets/icons/sound.png"
import { AppLoading, AuthSession } from 'expo';
import { Audio } from 'expo-av';
import * as Font from 'expo-font';
// var Sound = require('react-native-sound');
// import Sound from 'react-native-sound';






// const fetchSound = () => {
//   const soundObject = new Audio.Sound();
//   (async () => {
//     await soundObject.loadAsync(require('../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3'));
//   } 
//    )();
// }







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

const fetchFonts = () => {
  return Font.loadAsync({
    Londrina: require("../assets/fonts/LondrinaSolid-Regular.ttf"),
    IBM: require("../assets/fonts/IBMPlexSans-Bold.ttf")
  });
};







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


  ////code OK!!!!!////
const fetchSound = () => {
  const soundObject = new Audio.Sound();
  (async () => {
    await soundObject.loadAsync(require('../assets/musics/ES_JustSoHappyforYou_JosefBelHabib.mp3'))
    await soundObject.setIsLoopingAsync(true)
    await soundObject.playAsync()} 
   )();
}



  // useEffect(() => {
  //   fetchSound()
  // },[])




  // const [soundLoaded, setSoundLoaded] = useState(false);
  // if (!soundLoaded) {
  //   return (
      
      
  //   );
  // }

  // const soundObject = new Expo.Audio.Sound();

  // try {
  //   soundObject.loadAsync(require('../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3'));
  //   soundObject.playAsync();
  //   // Your sound is playing!
  // } catch (error) {
  //   console.log(error)// An error occurred!
  // }


  // try {
  //       // play the file tone.mp3
  //       SoundPlayer.playSoundFile('../assets/musics/ES_Just So Happy for You - Josef Bel Habib', 'mp3')
  //       // or play from url
  //       // SoundPlayer.playUrl('https://example.com/music.mp3')
  //   } catch (e) {
  //       console.log(`cannot play the sound file`, e)
  //   }


// sound = new Sound('../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3');

//     playSound = () => {
//         sound.play()
//     }


// const filepath = '../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3';
// const currentAudio = new Sound(filepath);
// currentAudio.setCategory('Playback');


// const soundObject = new Audio.Sound();
// try {
//   soundObject.loadAsync(require('../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3'));
//   soundObject.playAsync();
//   // Your sound is playing!
// } catch (e) {
//   console.log(`cannot play the sound file`, e)
// }









  // try {
  //   await soundObject.loadAsync(require('../assets/musics/ES_Just So Happy for You - Josef Bel Habib.mp3'));
  //   await soundObject.playAsync();
  //   // Your sound is playing!
  // } catch (e) {
  //   console.log(`cannot play the sound file`, e)
  // }

  // const fetchSound = () => {
  //   const soundObject = new Audio.Sound();
  //   (async () => {
  //     await soundObject.loadAsync(require('../assets/musics/ES_JustSoHappyforYou_JosefBelHabib.mp3'))
  //     await soundObject.setIsLoopingAsync(true);
  //     await soundObject.playAsync()} 
  //    )();
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
        <TouchableOpacity style={styles.buttonPlay} onPress={() => history.push("/select_characters")}>
          <Text style={styles.textButton}>PLAY</Text>
        </TouchableOpacity>

  
        <TouchableOpacity onPress={fetchSound()} >
          <Image style={{ opacity:0, top:480,height:50, width:50, alignSelf:"flex-end", marginRight:40}}
                  source={speaker}  />
        </TouchableOpacity>
  
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
})
