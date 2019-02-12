import React from "react";
import { StyleSheet, Text, View } from "react-native";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the App component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  }
});

export default App;
