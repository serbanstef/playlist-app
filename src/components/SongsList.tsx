import { StyleSheet, FlatList, ListRenderItem } from "react-native";

import Song from "./Song";
import { Item } from "../types/playlist";

export interface SongsListProps {
  items: Item[];
}

const renderItem: ListRenderItem<Item> = ({ item }) => {
  return (
    <Song
      author={item.track.artists[0].name}
      title={item.track.name}
      audioUrl={item.track.preview_url}
    />
  );
};

const keyExtractor = (item: Item) => item.track.id;

const SongsList = ({ items }: SongsListProps) => {
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.container}
    />
  );
};

export default SongsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    // backgroundColor: "transparent",
  },
});
