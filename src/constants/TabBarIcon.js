import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon
        name={this.props.name}
        size={this.props.size}
        style={{ marginBottom: -3 }}
        solid
        color={this.props.focused ? "#B0DDFF" : "#c2c2c2"}
      />
    );
  }
}
