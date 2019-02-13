import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class FilmItem extends React.Component {
  render() {
    const film = this.props.film;

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +
              film.poster_path
          }}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote}>{film.vote_average}</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date}>Sorti le {film.release_date}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={5}>
              {film.overview}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: 190,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10
  },
  image: {
    width: 120,
    height: 180,
    marginBottom: 15,
    // margin: 5,
    backgroundColor: "gray"
  },
  content_container: {
    flex: 1,
    // margin: 5,
    padding: 5
  },
  header_container: {
    flexDirection: "row",
    // flex: 3,
    marginBottom: 5
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 18,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5
  },
  vote: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#666666"
  },
  date_container: {
    flex: 1,
    marginBottom: 5
  },
  date: {
    textAlign: "left",
    fontSize: 14
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666"
  }
});

export default FilmItem;