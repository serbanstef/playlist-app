import { Text, TouchableOpacity, StyleSheet } from "react-native";

export interface SongProps {
  author: string;
  title: string;
  audioUrl?: string;
}

const Song = ({ author, title, audioUrl }: SongProps) => {
  return (
    <TouchableOpacity style={styles.container} disabled={!audioUrl}>
      <Text style={{ color: audioUrl ? "white" : "#363636" }}>{author}</Text>
      <Text style={{ color: audioUrl ? "gray" : "#363636" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
  },
});

export default Song;
