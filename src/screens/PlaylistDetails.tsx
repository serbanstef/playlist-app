import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PlaylistDetails = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

export default PlaylistDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
});
