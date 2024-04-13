import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Settings } from "../../features/settings/screens/settings.screen";
import { Favourites } from "../../features/settings/screens/favourites.screen";
// import CameraScreen from "../../features/settings/screens/CameraTwo";
import { CameraScreen } from "../../features/settings/screens/camera.screen";

const SettingNavigator = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingNavigator.Navigator
      screenOptions={{
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen",
      }}
    >
      <SettingNavigator.Screen
        component={Settings}
        name="All Settings"
        options={{ headerShown: false }}
      />
      <SettingNavigator.Screen
        component={Favourites}
        name="Favourites"
        // options={{ headerShown: false }}
      />
      <SettingNavigator.Screen
        component={CameraScreen}
        name="Camera"
        // options={{ headerShown: false }}
      />
    </SettingNavigator.Navigator>
  );
};
