import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { TextInput, Button, ActivityIndicator } from "react-native-paper";
import {
  AccountContainer,
  CustomBackground,
  CustomButton,
} from "../components/account.styles";
import { AuthContext } from "../../../services/authentication/auth.context";
import { theme } from "../../../infrastructure/theme";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, isLoading, error } = useContext(AuthContext);

  return (
    <View style={styles.con}>
      <CustomBackground>
        <AccountContainer>
          <Text style={styles.title}>MEALS TO GO</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            label="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            label="Password"
            secureTextEntry
            autoCapitalize="none"
            textContentType="password"
          />
          {error && <Text style={styles.error}>{error}</Text>}
          {!isLoading ? (
            <Button
              mode="contained"
              onPress={() => onLogin(email, password)}
              icon="lock-open"
              buttonColor={theme.colors.brand.primary}
            >
              Login
            </Button>
          ) : (
            <ActivityIndicator
              animating={true}
              color={theme.colors.brand.primary}
            />
          )}
          <View style={styles.actions}>
            <CustomButton text="Back" action={() => navigation.goBack()} />
          </View>
        </AccountContainer>
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
    textAlign: "center",
    color: theme.colors.brand.primary,
    fontWeight: "900",
    fontFamily: theme.fonts.heading,
  },
  actions: {
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: theme.colors.text.error,
    textAlign: "center",
    padding: 10,
    fontWeight: "400",
  },
});
