import React, {useState} from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import { StyleSheet, Text, View } from "react-native";
import SelectCharacters from "./components/SelectCharacters";
import Home from "./components/Home"
import DuelVersus from "./components/DuelVersus";
import Simon from "./components/DuelVersus";


export default function App() {

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/select_characters" component={SelectCharacters} />
          <Route exact path="/duel_versus" component={DuelVersus} />
          <Route exact path="/simon_game" component={Simon} />
        </Switch>
      </View>
    </NativeRouter>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
