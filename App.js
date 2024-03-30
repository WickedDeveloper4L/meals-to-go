import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsScreen } from "./src/features/restuarants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";

function SettingsScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.bg.primary,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
