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
import axios from "axios";
import { SearchBar } from "react-native-elements";

import { width, height } from "../constants/Layouts";

import FilmItem from "./FilmItem";
import { apiKey } from "../constants/key";

class Search extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { films: [], searchedText: "" };
  //   }
  state = {
    films: [],
    searchedText: ""
  };

  updateSearch = searchedText => {
    this.setState({ searchedText });
  };

  onPress = () => {
    console.log(this.state.searchedText);

    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=" +
          "a1ed9ff058a227b3f78a17db946daaaf" +
          "&language=fr&query=" +
          this.state.searchedText
      )
      .then(response => {
        console.log(response.data.results);

        this.setState({ films: response.data.results });
      })
      .catch(function(error) {
        console.log("wtf", error);
      });
  };

  render() {
    const { searchedText } = this.state;
    return (
      <KeyboardAvoidingView>
        <View style={styles.container}>
          {/* <TextInput
            style={styles.search}
            placeholder="Titre du film"
            keyboardType="web-search"
            onChangeText={this.updateSearch}
            onSubmitEditing={() => this.onPress()}
          /> */}
          {/* <Button title="Rechercher" onPress={this.onPress} /> */}
          <SearchBar
            inputContainerStyle={{
              backgroundColor: "white",
              borderRadius: 30,
              height: 20,
              width: 300,
              height: 20
            }}
            containerStyle={styles.search}
            placeholder="Rechercher"
            onChangeText={this.updateSearch}
            value={searchedText}
            onSubmitEditing={() => this.onPress()}
            lightTheme={true}
          />
        </View>
        <FlatList
          data={this.state.films}
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
    // borderWidth: 1,
    width: 300,
    height: 20,
    // paddingLeft: 15,
    borderColor: "white",
    backgroundColor: "white",
    marginTop: 45,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: 30,
    padding: 0
  }
});

export default Search;
