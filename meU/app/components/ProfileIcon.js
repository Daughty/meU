import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

class ProfileIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: props.picture,
    };
  }
  render() {
    return (
      <View>
        <Image source={this.state.picture} style={styles.imageIcon} />
      </View>
    );
  }
}

export default ProfileIcon;

const styles = StyleSheet.create({
  imageIcon: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
});
