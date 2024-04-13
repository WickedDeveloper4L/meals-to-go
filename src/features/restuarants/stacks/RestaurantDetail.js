import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import { RestaurantAccordion } from "../components/restaurantAccordion";
import { theme } from "../../../infrastructure/theme";

export const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantAccordion />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
  },
  name: {
    fontSize: 17,
    fontFamily: theme.fonts.monospace,
    fontWeight: "bold",
    margin: 5,
    textAlign: "center",
  },
});
