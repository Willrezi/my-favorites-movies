import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }

  render() {
    return (
      <FlatList
        data={this.props.films}
        extraData={this.props.favoritesMovie}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("MovieDetail", item);
            }}
          >
            <MovieItem
              film={item}
              isFavorite={
                this.props.favoritesMovie.findIndex(
                  film => film.id === item.id
                ) !== -1
                  ? true
                  : false
              }
            />
          </TouchableOpacity>
        )}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (
            !this.props.favoriteList &&
            this.props.page < this.props.totalPages
          ) {
            this.props.loadMovies();
          }
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return { favoritesMovie: state.favoritesMovie };
};

export default connect(mapStateToProps)(MovieList);
