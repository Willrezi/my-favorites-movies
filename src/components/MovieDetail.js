import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import moment from "moment";
import "moment/locale/fr";
import { connect } from "react-redux";
import { apiKey } from "../constants/key";

import { toggleFavorite } from "../store/actions/index";

class MovieDetail extends React.Component {
  //   static navigationOptions = {
  //     title: "Film",
  //     headerBackTitle: "null"
  //   };

  constructor(props) {
    super(props);
    this.state = {
      film: undefined,
      isLoading: true
    };
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          id +
          "?api_key=" +
          apiKey +
          "&language=fr"
      )
      .then(response => {
        this.setState({ film: response.data, isLoading: false });
        console.log(response.data);
      });
  }

  isLoading = () => {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  };

  displayMovie = () => {
    const { film } = this.state;
    if (film !== undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <ImageBackground
            style={styles.image}
            source={{
              uri: "https://image.tmdb.org/t/p/w300/" + film.backdrop_path
            }}
          />
          <Text style={styles.title}>{film.title}</Text>
          <Text style={styles.description}>{film.overview}</Text>
          <Text style={styles.text}>
            Sorti le {moment(new Date(film.release_date)).format("LL")}
          </Text>
          <Text style={styles.text}>
            Genre(s) :{" "}
            {film.genres
              .map(genre => {
                return genre.name;
              })
              .join(" / ")}
          </Text>
          <Text style={styles.text}>
            Note moyenne : {film.vote_average} / 10
          </Text>
        </ScrollView>
      );
    }
  };

  render() {
    // const { film } = this.state;
    return (
      <View style={styles.container}>
        {this.isLoading()}
        {this.displayMovie()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // margin: 5
    // alignItems: "center",
    // justifyContent: "center"
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 200,
    width: "100%"
  },
  title: {
    fontWeight: "bold",
    fontSize: 35,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: "#000000",
    textAlign: "center"
  },
  description: {
    fontStyle: "italic",
    color: "#666666",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 15
  },
  text: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
  }
});

export default MovieDetail;
