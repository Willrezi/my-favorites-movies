import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

import { apiKey } from "../constants/key";
import MovieList from "./MovieList";

class TopRated extends React.Component {
  state = {
    films: []
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
          apiKey +
          "&language=fr-FR"
      )
      .then(response => {
        console.log("cdm", response.data.results);

        this.setState({
          films: response.data.results
        });
      })
      .catch(function(error) {
        console.log("wtf", error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <MovieList
          films={this.state.films}
          navigation={this.props.navigation}
          loadMovies={this.loadMovies}
          page={this.page}
          totalPages={this.totalPages}
          favoriteList={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

export default TopRated;
