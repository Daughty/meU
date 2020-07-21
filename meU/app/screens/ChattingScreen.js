import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TextInput,
  Button,
} from "react-native";

import ChatBlock from "../components/ChatBlock";
import UserInfo from "../components/UserInfo";

class ChattingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileTo: {
        id: 1,
        fullName: "Mary James",
        phone: "9898761223",
        picture: require("../assets/girl.png"),
      },
      profileMe: {
        id: 2,
        fullName: "R P B",
        phone: "9898761224",
        picture: require("../assets/boy.png"),
      },
      message: "",
    };
  }

  handleMessage = (text) => {
    this.setState({ message: text });
  };

  sendMessage = () => {
    console.log(this.state.message);
    this.handleMessage("");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text>header</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <UserInfo profile={this.state.profileTo} />
        </View>
        <View style={styles.scrollBodyContainer}>
          <ChatBlock
            profileTo={this.state.profileTo}
            profileMe={this.state.profileMe}
          />
        </View>
        <View style={styles.chatContainer}>
          <TextInput
            onChangeText={(text) => this.handleMessage(text)}
            placeholder="Enter your message..."
            placeholderTextColor="gray"
            style={styles.chatBox}
            value={this.state.message}
          ></TextInput>
          <Button
            style={styles.sendBtn}
            title="Submit"
            onPress={this.sendMessage}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default ChattingScreen;

const styles = StyleSheet.create({
  chatBox: {
    flex: 5,
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
    height: "55%",
    backgroundColor: "lightgray",
    textShadowColor: "black",
  },
  chatContainer: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "grey",
  },
  sendBtn: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1.5,
    backgroundColor: "dodgerblue",
  },
  scrollBodyContainer: {
    flex: 6,
  },
  userInfoContainer: {
    flex: 2,
    // backgroundColor: "gold",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    margin: 10,
    borderRadius: 20,
  },
});
