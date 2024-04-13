import { useContext, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import { styles } from "./restaurant.screen.styles";
import { restaurantsContext } from "../../../services/restaurants/restaurant.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { FavoritesBar } from "../components/favoutites-bar.component";
export const RestaurantsScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  const { restaurants, isLoading } = useContext(restaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Search
        isFavouritesToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar
          onNavigate={navigation.navigate}
          favourites={favourites}
        />
      )}
      {isLoading ? (
        <View style={styles.indicatorCon}>
          <ActivityIndicator
            animating={true}
            size="large"
            color={MD2Colors.red300}
          />
        </View>
      ) : (
        <View style={styles.list}>
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
            data={restaurants}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 16 }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
