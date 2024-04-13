import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import image from "../../../../assets/home_bg.jpg";
import { theme } from "../../../infrastructure/theme";
export const CustomBackground = ({ children }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {children}
    </ImageBackground>
  );
};

export const BackgroundCover = ({ children }) => {
  return <View style={styles.cover}>{children}</View>;
};
export const AccountContainer = ({ children }) => {
  return <View style={styles.accountCon}>{children}</View>;
};
export const CustomButton = ({ action, text }) => {
  return (
    <Button
      style={styles.customBtn}
      buttonColor={theme.colors.brand.primary}
      mode="contained"
      onPress={action}
    >
      {text}
    </Button>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  cover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  accountCon: {
    backgroundColor: "rgba(255, 255,255, 0.7)",
    padding: theme.space[4],
    gap: 10,
    margin: theme.space[3],
  },
  customBtn: {
    width: "auto",
  },
});
