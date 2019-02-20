import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import Search from "../components/Search";
import MovieDetail from "../components/MovieDetail";
import Favorites from "../components/Favorites";
import TabBarIcon from "../constants/TabBarIcon";

const SearchStackNavigator = createStackNavigator({
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
      headerBackTitle: null,
      headerTintColor: "grey",
      headerStyle: {
        backgroundColor: "#B0DDFF"
      }
    }
  }
});

const FavoritesStack = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: "Mes favoris",
      //   headerBackTitle: null,
      headerTintColor: "grey",
      headerStyle: {
        backgroundColor: "#B0DDFF"
      }
    }
  },
  MovieDetail: {
    screen: MovieDetail
  }
});

const MovieTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} size={25} name="search" />
        )
      }
    },
    Favorites: {
      screen: FavoritesStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} size={25} name="heart" />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true
    }
  }
);

export default createAppContainer(MovieTabNavigator);
