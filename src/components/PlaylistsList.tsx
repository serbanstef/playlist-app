import { StyleSheet, FlatList, ListRenderItem } from "react-native";

import PlaylistsListRow from "./PlaylistsListRow";
import { convertToRows } from "../utils/lists";
import { PlaylistItem } from "../types/playlists";

export interface PlaylistsListProps {
  items: PlaylistItem[];
  loadMoreCallback: () => void;
}

const renderItem: ListRenderItem<PlaylistItem[]> = ({ item }) => {
  return <PlaylistsListRow item1={item[0]} item2={item[1]} />;
};

const keyExtractor = (item: PlaylistItem[]) => `${item[0].id}${item[1]?.id}`;

const PlaylistsList = ({ items, loadMoreCallback }: PlaylistsListProps) => {
  const rows = convertToRows<PlaylistItem>(items, 2);

  return (
    <FlatList
      data={rows}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.container}
      onEndReached={loadMoreCallback}
      onEndReachedThreshold={0.5}
    />
  );
};

export default PlaylistsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: "transparent",
  },
});
