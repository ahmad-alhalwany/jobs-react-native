import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite, 
    padding: SIZES.medium,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: SIZES.medium,
  },
});

export default styles;