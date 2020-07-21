import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import ProfileIcon from "../components/ProfileIcon";

class ChatBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileMe: props.profileMe,
      profile: props.profileTo,
      chats: [],
    };
  }

  _getChats = (profile) => {
    this.state.chats = [
      {
        text: "Hi",
        dateTime: "17/07/2020T13:00",
        picture: this.state.profile.picture,
        fullName: this.state.profile.fullName,
      },
      {
        text: "Hey you there?",
        dateTime: "17/07/2020T13:01",
        picture: this.state.profile.picture,
        fullName: this.state.profile.fullName,
      },
      {
        text: "Hii!!",
        dateTime: "17/07/2020T13:02",
        picture: this.state.profileMe.picture,
        fullName: this.state.profileMe.fullName,
      },
      {
        text: "Wassup?",
        dateTime: "17/07/2020T13:03",
        picture: this.state.profile.picture,
        fullName: this.state.profile.fullName,
      },
      {
        text: "Just sitting.",
        dateTime: "17/07/2020T13:04",
        picture: this.state.profileMe.picture,
        fullName: this.state.profileMe.fullName,
      },
      {
        text:
          "Lets go somewhere tomorrow? If you are free. Else i will call someone else",
        dateTime: "17/07/2020T13:05",
        picture: this.state.profile.picture,
        fullName: this.state.profile.fullName,
      },
      {
        text:
          "Sure. But where can we go? I have an assignment also. So we will need to return back soon. That won't be an issue right?",
        dateTime: "17/07/2020T13:07",
        picture: this.state.profileMe.picture,
        fullName: this.state.profileMe.fullName,
      },
    ];
  };

  renderItem = ({ item }) => (
    <View
      style={[
        styles.container,
        item.fullName === this.state.profileMe.fullName
          ? styles.containerRight
          : null,
      ]}
    >
      <ProfileIcon
        picture={item.picture}
        style={
          item.fullName === this.state.profileMe.fullName
            ? styles.containerRight
            : null
        }
      />
      <Text
        style={[
          styles.message,
          item.fullName === this.state.profileMe.fullName
            ? styles.messageRight
            : null,
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  render() {
    this._getChats(this.state.profile);
    // console.log(this.state.chats);
    return (
      <FlatList
        data={this.state.chats}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.dateTime}
      />
    );
  }
}

export default ChatBlock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 5,
    alignItems: "flex-start",
  },
  containerRight: {
    flexDirection: "row-reverse",
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
  messageRight: {
    paddingLeft: 20,
    paddingRight: 40,
    marginLeft: 100,
    marginRight: -30,
    backgroundColor: "white",
    borderColor: "#DD571C",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 20,
  },
});
