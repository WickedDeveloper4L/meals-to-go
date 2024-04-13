import { View, Text, Image, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../services/authentication/auth.context";
import { Avatar, Button } from "react-native-paper";
import { theme } from "../../../infrastructure/theme";

const PreviewScreen = ({ acceptPhoto, rejectPhoto }) => {
  const { user } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  const getPreview = async (currentUser) => {
    const photouri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photouri);
  };
  useEffect(() => {
    getPreview(user);
  }, [user]);

  return (
    <View style={styles.previewCon}>
      <Avatar.Image size={280} source={{ uri: photo }} />

      <View style={styles.actionCon}>
        <Button
          mode="contained"
          onPress={() => acceptPhoto()}
          icon="check"
          buttonColor={theme.colors.brand.primary}
        >
          Accept
        </Button>
        <Button
          mode="contained"
          onPress={() => rejectPhoto()}
          icon="close"
          buttonColor={theme.colors.ui.error}
        >
          Reject
        </Button>
      </View>
    </View>
  );
};

export default PreviewScreen;

const styles = StyleSheet.create({
  previewCon: {
    flex: 1,
    // justifyContent: "center",
    paddingTop: 20,
    alignItems: "center",
  },
  actionCon: {
    paddingLeft: 80,
    paddingRight: 80,
    padding: 20,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
