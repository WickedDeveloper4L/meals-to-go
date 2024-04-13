import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect } from "react";
import {
  AccountContainer,
  BackgroundCover,
  CustomBackground,
} from "../components/account.styles";
import { Button } from "react-native-paper";
import { theme } from "../../../infrastructure/theme";
import LottieView from "lottie-react-native";
export const Account = ({ navigation }) => {
  const animation = useRef(null);
  useEffect(() => {
    animation.current?.play();
  }, []);
  return (
    <View style={styles.con}>
      <CustomBackground>
        <View style={styles.animationCon}>
          <LottieView
            ref={animation}
            loop
            style={{
              width: 300,
              height: 300,
            }}
            autoPlay
            source={require("../../../../assets/watermelon.json")}
          />
        </View>

        <BackgroundCover>
          <AccountContainer>
            <Text style={styles.title}>MEALS TO GO</Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate("Login")}
              icon="lock-open"
              buttonColor={theme.colors.brand.primary}
            >
              Login
            </Button>
            <Button
              mode="contained"
              onPress={() => navigation.navigate("Register")}
              icon="email"
              buttonColor={theme.colors.brand.primary}
            >
              Register
            </Button>
          </AccountContainer>
        </BackgroundCover>
      </CustomBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    margin: 20,
    color: theme.colors.brand.primary,
    fontWeight: "900",
    fontFamily: theme.fonts.heading,
  },
  animationCon: {
    position: "absolute",
    zIndex: 99,
    top: 50,
    alignSelf: "center",
  },
});
