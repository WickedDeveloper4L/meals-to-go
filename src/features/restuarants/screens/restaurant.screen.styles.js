import { StyleSheet, StatusBar } from "react-native";
import { theme } from "../../../infrastructure/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    flex: 0.05,
    padding: theme.space[3],
    justifyContent: "center",
  },
  list: {
    backgroundColor: theme.colors.bg.primary,
    flex: 0.95,
    padding: theme.space[2],
  },
});
