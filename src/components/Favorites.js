import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import MovieList from "./MovieList";

class Favorites extends React.Component {
  renderFavorite() {
    console.log("...", this.props.favoritesMovie);

    if (this.props.favoritesMovie.length > 0) {
      return (
        <View style={styles.container}>
          <MovieList
            films={this.props.favoritesMovie}
            navigation={this.props.navigation}
            favoriteList={true}
          />
        </View>
      );
    } else {
      return (
        <Text numberOfLines={2} style={styles.empty_fav}>
          Vous n'avez pas encore ajoutés de films à vos favoris
        </Text>
      );
    }
  }

  render() {
    return <View>{this.renderFavorite()}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  empty_fav: {
    margin: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 30,
    alignItems: "center",
    color: "grey"
  }
});

const mapStateToProps = state => {
  return { favoritesMovie: state.favoritesMovie };
};

export default connect(mapStateToProps)(Favorites);
