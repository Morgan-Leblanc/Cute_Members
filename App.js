import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import Simon from "./components/Simon"
export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/newgame" component={Morguy} /> */}
            <Route exact path="/" component={Simon} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
