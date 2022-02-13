import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation";

export interface PlaylistsListItemProps {
  id: string;
  imageUrl: string;
}

export const PlaylistsListItem = ({ id, imageUrl }: PlaylistsListItemProps) => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

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
