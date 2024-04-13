import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { CompactRestaurantInfo } from "../../map/components/compactRestaurantInfo";
import { theme } from "../../../infrastructure/theme";

export const FavoritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.favouritesText}>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <View key={key} style={styles.viewCon}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantsDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  viewCon: { marginLeft: 10 },
  favouritesText: {
    fontSize: 16,
    fontWeight: "700",
    padding: 5,
    fontFamily: theme.fonts.body,
  },
});
