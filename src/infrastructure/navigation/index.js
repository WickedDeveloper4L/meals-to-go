import { Text, View } from "react-native";
import { AuthContext } from "../../services/authentication/auth.context";
import { AppNavigator } from "./App.navigator";
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigator";
export const Navigator = () => {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
