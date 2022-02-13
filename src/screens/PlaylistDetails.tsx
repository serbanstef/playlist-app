import { View, Text, StyleSheet } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../navigation";
import { usePlaylistDetails } from "../hooks";
import PlaylistHeader from "../components/PlaylistHeader";
import SongsList from "../components/SongsList";

export interface PlaylistDetailsProps {
  navigation: NavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, "PlaylistDetails">;
}

const PlaylistDetails = ({ navigation, route }: PlaylistDetailsProps) => {
  const { playlist, error } = usePlaylistDetails(route.params.id);

  // handle api error
  if (error) return null;

  if (playlist)
    return (
      <SafeAreaView style={styles.container}>
        <PlaylistHeader
          name={playlist?.name}
          description={playlist.description}
          imageUrl={playlist.images[0].url}
          followers={playlist.followers.total}
          owner={playlist.owner.display_name}
        />
        <SongsList items={playlist.tracks.items} />
      </SafeAreaView>
    );

  return null;
};

export default PlaylistDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 20,
  },
});
