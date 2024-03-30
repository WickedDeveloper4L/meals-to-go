import { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import { styles } from "./restaurant.screen.styles";
export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          renderItem={() => <RestaurantInfoCard />}
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
            { name: 11 },
            { name: 12 },
            { name: 13 },
            { name: 14 },
          ]}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </View>
    </SafeAreaView>
  );
};
