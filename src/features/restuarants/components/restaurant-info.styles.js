import { theme } from "../../../infrastructure/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.bg.primary,
    marginBottom: theme.space[3],
  },
  image: {
    padding: theme.space[3],
    backgroundColor: theme.colors.bg.primary,
  },
  text: {
    color: theme.colors.text.primary,

    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.body,
  },
  address: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.caption,
  },
  info: { padding: theme.space[3] },
  svgCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.space[2],
    paddingBottom: theme.space[2],
  },
  starCon: {
    flexDirection: "row",
  },
  openCon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  closedText: {
    color: theme.colors.text.error,
    fontSize: theme.fontSizes.caption,
  },
});
