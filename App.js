import React from "react";
import { StyleSheet, Text, View } from "react-native";

// import Search from "./src/components/Search";
import Navigation from "./src/navigation/Navigation";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#FAFAFA"
  }
});

export default App;
