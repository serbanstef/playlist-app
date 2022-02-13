import { View, StyleSheet, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export interface PlaylistHeaderProps {
  name: string;
  owner: string;
  description: string;
  imageUrl: string;
  followers: number;
}

const PlaylistHeader = ({
  name,
  owner,
  description,
  imageUrl,
  followers,
}: PlaylistHeaderProps) => {
  const millionsOfFollowers = (followers / 1000000).toPrecision(1);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["transparent", "rgba(45, 88, 14, 0.81)"]}
        style={StyleSheet.absoluteFillObject}
      />
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode={"tail"}>
            {name}
          </Text>
          <Text style={styles.subtitle}>Playlist by {owner}</Text>
        </View>
        <View>
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode={"tail"}
          >
            {description}
          </Text>
          <Text style={styles.followers}>{millionsOfFollowers}M followers</Text>
        </View>
      </View>
    </View>
  );
};

export default PlaylistHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 160,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(74, 146, 23, 1)",
  },
  image: {
    width: 120,
    height: 120,
  },
  detailsContainer: {
    height: 120,
    justifyContent: "space-between",
    paddingLeft: 10,
    flexShrink: 1,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  subtitle: {
    color: "gray",
    marginTop: 5,
  },
  description: {
    color: "white",
  },
  followers: {
    color: "gray",
  },
});
