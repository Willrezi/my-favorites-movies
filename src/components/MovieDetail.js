import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView
} from "react-native";
import axios from "axios";
import { apiKey } from "../constants/key";

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {}
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
        this.setState({ film: response.data });
        console.log(response.data);
      });
  }

  render() {
    const { film } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.image}
            source={{
              uri: "https://image.tmdb.org/t/p/w300/" + film.backdrop_path
            }}
          />
          <Text style={styles.title}>{film.title}</Text>
          <Text style={styles.description}>{film.overview}</Text>
        </View>
      </ScrollView>
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
  }
});

export default MovieDetail;
