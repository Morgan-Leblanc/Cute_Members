import React from "react";
import { View, Text, Button } from "react-native";
import { AuthSession } from "expo";
import styled from 'styled-components'




const Home = ({ history }) => (
  <View>
    <Text style={{ fontSize: 70, marginBottom: 60, flexDirection: 'column'  }}>CUT(e) MEMBERS</Text>
    <Button title="PLAY" style={{ width : 50 , height: 50, color:'#ff5c5c' }} onPress={() => history.push("/newgame")} />
  </View>


);


export default Home