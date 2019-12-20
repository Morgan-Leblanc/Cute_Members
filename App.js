import React from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import SelectCharacters from "./components/SelectCharacters";
import Home from "./components/Home"
import Duel from "./components/Duel";
import DuelDead from "./components/DuelDead";





export default class App extends React.Component {
  render(){
    return (
    <NativeRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/select_characters" component={SelectCharacters} />
          <Route exact path="/duel" component={Duel}/>
          <Route exact path="/dueldead" component={DuelDead}/>
        </Switch>
    </NativeRouter>
  );
}

}