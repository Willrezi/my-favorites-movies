import { createStackNavigator, createAppContainer } from "react-navigation";

import Search from "../components/Search";
import MovieDetail from "../components/MovieDetail";

const searchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      //   title: "Rechercher",
      header: null
    }
  },
  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "#B0DDFF"
      }
    }
  }
});

export default createAppContainer(searchStackNavigator);
