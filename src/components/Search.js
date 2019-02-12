import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  KeyboardAvoidingView,
  FlatList,
  Text
} from "react-native";

import { width, height } from "../constants/Layouts";

import films from "../datas/filmData";
import FilmItem from "./FilmItem";

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
        <FlatList
          data={films}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
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
    width: width,
    marginBottom: 20
  },
  search: {
    borderWidth: 1,
    width: 350,
    height: 40,
    paddingLeft: 15,
    borderColor: "#f1f1f1",
    marginTop: 45,
    borderRadius: 30
  }
});

export default Search;
