import React from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import SelectCharacters from "./components/SelectCharacters";
import Home from "./components/Home"
import Duel from "./components/Duel";





export default class App extends React.Component {
  render(){
    return (
    <NativeRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/select_characters" component={SelectCharacters} />
          <Route exact path="/duel" component={Duel}/>
        </Switch>
    </NativeRouter>
  );
}

}