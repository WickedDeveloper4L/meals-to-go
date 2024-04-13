import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { Account } from "../../features/account/screens/account.screen";
import { Login } from "../../features/account/screens/login.screen";
import { Register } from "../../features/account/screens/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Account} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
