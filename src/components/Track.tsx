import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { usePlayer } from "../contexts/PlayerContext";

export interface TrackProps {
  artist: string;
  title: string;
  url?: string;
}

const Track = ({ artist, title, url }: TrackProps) => {
  const { playTrack } = usePlayer();

  const handleTrackPress = () => url && playTrack({ artist, title, url });

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!url}
      onPress={handleTrackPress}
    >
      <Text style={{ color: url ? "white" : "#363636" }}>{artist}</Text>
      <Text style={{ color: url ? "gray" : "#363636" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Track;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
  },
});
