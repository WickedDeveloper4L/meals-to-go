import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restuarants/screens/restaurants.screen";

import { RestaurantDetail } from "../../features/restuarants/stacks/RestaurantDetail";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      />
      <RestaurantStack.Screen
        name="RestaurantsDetail"
        component={RestaurantDetail}
        options={{ headerShown: false }}
      />
    </RestaurantStack.Navigator>
  );
};
