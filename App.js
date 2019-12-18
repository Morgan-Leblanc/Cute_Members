import React from 'react';
import { StyleSheet, View, Button, Alert, Text } from 'react-native';

// navigation //
// import { TabNavigator } from 'react-navigation';
// import TabOne from './TabOne';
// import TabTwo from './TabTwo';

// export default TabNavigator({
//     TabOne: { screen: TabOne },
//     TabTwo: { screen: TabTwo },
// });

export default class App extends React.Component {

  handleClick() {
    Alert.alert('Hello !');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Click on the button BITCH : </Text>
        <Button onPress={this.handleClick.bind(this)} title="Go" />
        <TabOne/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:"20%"
  },
});