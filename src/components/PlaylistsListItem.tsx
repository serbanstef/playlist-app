import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export interface PlaylistsListItemProps {
  id: string;
  imageUrl: string;
}

export const PlaylistsListItem = ({ id, imageUrl }: PlaylistsListItemProps) => {
  const { navigate } = useNavigation<any>();

  const handlePress = () => navigate("PlaylistDetails", { id });

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
      <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    height: 200,
  },
});
