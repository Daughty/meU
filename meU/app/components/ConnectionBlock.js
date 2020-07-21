import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import ProfileIcon from "../components/ProfileIcon";

class ConnectionBlock extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = props.props;
  }
  render() {
    // console.log(this.state);
    return (
      <View style={styles.container}>
        <ProfileIcon picture={this.state.picture} />
        <Text style={styles.message}>{this.state.fullName}</Text>
      </View>
    );
  }
}

export default ConnectionBlock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 5,
    alignItems: "flex-start",
  },
  message: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingLeft: 40,
    paddingRight: 20,
    marginTop: 20,
    marginLeft: -30,
    marginRight: 100,
    backgroundColor: "#DD571C",
    borderColor: "red",
    borderRightWidth: 4,
    borderLeftWidth: 4,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 0,
    zIndex: -1,
  },
});
