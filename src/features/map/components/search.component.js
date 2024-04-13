import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import { theme } from "../../../infrastructure/theme";
export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <View style={styles.search}>
      <Searchbar
        icon="map"
        placeholder="search for a location"
        value={searchKeyword}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: theme.space[3],
    position: "absolute",
    top: 15,
    zIndex: 999,
    width: "100%",
  },
});
