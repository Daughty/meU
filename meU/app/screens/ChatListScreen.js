import React, { Component } from "react";
import { SafeAreaView, Dimensions, FlatList, StyleSheet } from "react-native";

import ConnectionsBlock from "../components/ConnectionBlock";

class ChatListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // profileMe: this.props.profileMe,
      profileMe: {
        id: 1,
        fullName: "Rishi Protim Bose",
        email: "lp.rishiprotim@gmail.com",
        phone: "9592026337",
        gender: "MALE",
        picture: require("../assets/boy.png"),
      },
      connections: [],
    };
  }

  _getConnections = (profileMe) => {
    let connections = [
      {
        id: 2,
        picture: require("../assets/boy.png"),
        fullName: "John",
        phone: "8327877281",
      },
      {
        id: 3,
        picture: require("../assets/girl.png"),
        fullName: "Mary",
        phone: "9127877281",
      },
      {
        id: 4,
        picture: require("../assets/girl.png"),
        fullName: "Stacy",
        phone: "7643626262",
      },
    ];
    this.state.connections = connections;
  };

  _setConnections = (profile) => {
    this.state.connections.append(profile);
  };

  renderItem = ({ item }) => <ConnectionsBlock props={item} />;

  render() {
    // console.log(this.state.connections);
    this._getConnections(this.state.profileMe);
    // console.log(this.state.connections);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.connections}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default ChatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
});
