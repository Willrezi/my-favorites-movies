import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  KeyboardAvoidingView
} from "react-native";

import { width, height } from "../constants/Layouts";

class Search extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <TextInput
            style={styles.search}
            placeholder="Titre du film"
            keyboardType="web-search"
          />
          <Button title="Rechercher" onPress={() => {}} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B0DDFF",
    width: width
  },
  search: {
    borderWidth: 1,
    width: 350,
    height: 40,
    paddingLeft: 15,
    borderColor: "#f1f1f1",
    marginTop: 50,
    borderRadius: 50
  }
});

export default Search;
