import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../services/authentication/auth.context";
import { List, Avatar } from "react-native-paper";
import { theme } from "../../../infrastructure/theme";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
export const Settings = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  const getPreview = async (currentUser) => {
    const photouri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photouri);
  };
  useFocusEffect(() => {
    getPreview(user);
  });
  return (
    <SafeAreaView>
      <View style={{ alignItems: "center", gap: 20, padding: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon
              size={180}
              icon="human"
              backgroundColor={theme.colors.brand.primary}
            />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor={theme.colors.brand.primary}
            />
          )}
        </TouchableOpacity>

        <Text style={{ fontSize: theme.fontSizes.title, fontWeight: "600" }}>
          {user.email}
        </Text>
      </View>

      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} icon="heart" color="black" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} icon="door" color="black" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
