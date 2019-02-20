import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import MovieList from "./MovieList";

class Favorites extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MovieList
          films={this.props.favoritesMovie}
          navigation={this.props.navigation}
          favoriteList={true}
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

const mapStateToProps = state => {
  return { favoritesMovie: state.favoritesMovie };
};

export default connect(mapStateToProps)(Favorites);
