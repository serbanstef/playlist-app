import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlaylistsList from "../components/PlaylistsList";

import useFeaturedPlaylists from "../hooks/useFeaturedPlaylists";

const FeaturedPlaylists = () => {
  const { message, playlists, loadMore, error } = useFeaturedPlaylists();

  if (error) {
    // handle api error
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{message}</Text>
      <PlaylistsList items={playlists} loadMoreCallback={loadMore} />
    </SafeAreaView>
  );
};

export default FeaturedPlaylists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
