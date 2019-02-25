import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  KeyboardAvoidingView,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import { SearchBar } from "react-native-elements";
import { connect } from "react-redux";

import { width, height } from "../constants/Layouts";

import MovieItem from "./MovieItem";
import { apiKey } from "../constants/key";
import MovieList from "./MovieList";

class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.searchedText = "";
    this.page = 0;
    this.totalPages = 0;
    this.state = {
      films: [],
      isLoading: false,
      searchedText: ""
    };
  }

  updateSearch = searchedText => {
    this.setState({ searchedText });
  };

  loadMovies = () => {
    if (this.state.searchedText.length > 0) {
      this.setState({ isLoading: true });
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=" +
            apiKey +
            "&language=fr&query=" +
            this.state.searchedText +
            "&include_adult=false" +
            "&page=" +
            (this.page + 1)
        )
        .then(response => {
          console.log(response.data.results);
          this.page = response.data.page;
          this.totalPages = response.data.total_pages;
          this.setState({
            films: [...this.state.films, ...response.data.results],
            isLoading: false
          });
        })
        .catch(function(error) {
          console.log("wtf", error);
        });
    }
  };

  searchFilms = () => {
    this.page = 0;
    this.totalPages = 0;
    this.setState(
      {
        films: []
      },
      () => {
        this.loadMovies();
      }
    );
  };

  isLoading = () => {
    this.state.isLoading ? (
      <View style={styles.loading_container}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  render() {
    const { searchedText } = this.state;
    return (
      <KeyboardAvoidingView>
        <View style={styles.container}>
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
            onSubmitEditing={() => this.searchFilms()}
            lightTheme={true}
            // onClear={this.componentDidMount()}
          />
        </View>
        <MovieList
          films={this.state.films}
          navigation={this.props.navigation}
          loadMovies={this.loadMovies}
          page={this.page}
          totalPages={this.totalPages}
          favoriteList={false}
        />
        {this.isLoading()}
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
    // width: 300,
    height: 20,
    // paddingLeft: 15,
    borderColor: "white",
    backgroundColor: "white",
    marginTop: 41,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: 25,
    padding: 0
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

// const mapStateToProps = state => {
//   return { favoritesMovie: state.favoritesMovie };
// };

// export default connect(mapStateToProps)(Search);
export default Search;
