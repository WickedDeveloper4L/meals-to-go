import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import {
  CustomBackground,
  CustomButton,
  AccountContainer,
} from "../components/account.styles";
import { AuthContext } from "../../../services/authentication/auth.context";
import { theme } from "../../../infrastructure/theme";
import { Button, TextInput, ActivityIndicator } from "react-native-paper";
export const Register = ({ navigation }) => {
  const { onRegister, isLoading, error } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

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
          <TextInput
            value={repeatedPassword}
            onChangeText={(text) => setRepeatedPassword(text)}
            label="Confirm password"
            secureTextEntry
            autoCapitalize="none"
            textContentType="password"
          />
          {error && <Text style={styles.error}>{error}</Text>}
          {!isLoading ? (
            <Button
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
              icon="email"
              buttonColor={theme.colors.brand.primary}
            >
              Sign up
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
  actions: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    margin: 20,
    textAlign: "center",
    color: theme.colors.brand.primary,
    fontWeight: "900",
    fontFamily: theme.fonts.heading,
  },
  error: {
    color: theme.colors.text.error,
    textAlign: "center",
    padding: 10,
    fontWeight: "400",
  },
});
