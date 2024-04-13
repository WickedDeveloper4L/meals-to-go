import React, { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <TouchableOpacity
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
      style={styles.con}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </TouchableOpacity>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  con: {
    // backgroundColor: "transparent",
    // borderColor: "#20232a",
    position: "absolute",
    top: 25,
    // width: 64,
    right: 25,
    zIndex: 9,
  },
});
