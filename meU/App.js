import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ChattingScreen from "./app/screens/ChattingScreen";
import ChatListScreen from "./app/screens/ChatListScreen";

export default function App() {
  return <ChattingScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
