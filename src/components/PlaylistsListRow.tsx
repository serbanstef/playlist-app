import { StyleSheet, View } from "react-native";
import { PlaylistItem } from "../types/playlists";

import { PlaylistsListItem } from "./PlaylistsListItem";

export interface RowProps {
  item1: PlaylistItem;
  item2?: PlaylistItem;
}

const ListRow = ({ item1, item2 }: RowProps) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.itemContainer}>
        <PlaylistsListItem id={item1.id} imageUrl={item1.images[0].url} />
      </View>
      <View style={styles.spacer} />
      {item2 ? (
        <View style={styles.itemContainer}>
          <PlaylistsListItem id={item2.id} imageUrl={item2.images[0].url} />
        </View>
      ) : (
        <View style={styles.placeHolder} />
      )}
    </View>
  );
};

export default ListRow;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 15,
  },
  spacer: {
    height: "100%",
    width: 15,
  },
  itemContainer: {
    flex: 1,
  },
  placeHolder: {
    flex: 1,
  },
});
