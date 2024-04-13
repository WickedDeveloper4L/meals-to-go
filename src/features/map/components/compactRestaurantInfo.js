import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export const CompactRestaurantInfo = ({ restaurant }) => {
  const {
    name,
    address,
    icon,
    photos = [
      "https://img.freepik.com/premium-photo/restaurant-table-many-different-dishes_135427-6768.jpg?w=740",
    ],
    rating = 4,
    isOpenNow,
    isClosedTemporarily,
    placeId,
  } = restaurant;
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: photos[0] }}
        width={120}
        height={120}
      />

      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // padding: 5,
    // flex: 1,
    maxWidth: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    borderRadius: 10,
  },
  name: {
    fontSize: 10,
    textAlign: "center",
    padding: 10,
    fontWeight: "600",
    maxWidth: 120,
  },
});
