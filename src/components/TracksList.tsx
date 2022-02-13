import { StyleSheet, FlatList, ListRenderItem } from "react-native";

import Track from "./Track";
import { Item } from "../types/playlist";

export interface TracksListProps {
  items: Item[];
}

const renderItem: ListRenderItem<Item> = ({ item }) => {
  return (
    <Track
      artist={item.track.artists[0].name}
      title={item.track.name}
      url={item.track.preview_url}
    />
  );
};

const keyExtractor = (item: Item) => item.track.id;

const TracksList = ({ items }: TracksListProps) => {
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.container}
    />
  );
};

export default TracksList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
});
