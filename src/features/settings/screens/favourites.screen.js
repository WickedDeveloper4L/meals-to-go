import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restuarants/components/restaurant-info.component";

export const Favourites = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return (
    <View style={{ flex: 1 }}>
      {favourites.length ? (
        <FlatList
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantsDetail", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
          data={favourites}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 20 }}>Nothing here...😒</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
