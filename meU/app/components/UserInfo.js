import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: props.profile,
      status: "Offline",
    };
  }

  _getStatus = (props) => {};

  _getStyleForStatus = () => {
    if (this.state.status === "Online") return styles.online;
    else if (this.state.status === "Offline") return styles.offline;
    else return styles.playing;
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.profile.picture} style={styles.imageIcon} />
        <View style={styles.infoText}>
          <Text style={[styles.message, styles.name]}>
            {this.state.profile.fullName}
          </Text>
          <View style={styles.phone}>
            <Text style={styles.message}>{this.state.profile.phone}</Text>
          </View>
          <View style={styles.statusContainer}>
            <View style={[styles.circle, this._getStyleForStatus()]} />
            <Text style={styles.message}>{this.state.status}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 5,
    paddingTop: 20,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 10,
  },
  online: {
    backgroundColor: "green",
  },
  offline: {
    backgroundColor: "red",
  },
  playing: {
    backgroundColor: "yellow",
  },
  imageIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoText: {
    flex: 1,
    marginHorizontal: 10,
  },
  statusContainer: {
    flex: 1,
    flexDirection: "row",
  },
  phone: {
    flexDirection: "row",
  },
  message: {
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  name: {
    // paddingVertical: 5,
    // paddingHorizontal: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});
