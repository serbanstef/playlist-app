import { View, Text, StyleSheet } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation";

import { usePlaylistDetails } from "../hooks";

export interface PlaylistDetailsProps {
  navigation: NavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, "PlaylistDetails">;
}

const PlaylistDetails = ({ navigation, route }: PlaylistDetailsProps) => {
  const { playlist, error } = usePlaylistDetails(route.params.id);

  if (error) {
    // handle api error
    return null;
  }

  return <SafeAreaView style={styles.container}>
    <Text style={{color: 'white'}}>{playlist?.name}</Text>
  </SafeAreaView>;
};

export default PlaylistDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
});
