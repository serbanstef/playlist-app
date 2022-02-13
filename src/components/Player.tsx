import { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { Track } from "../contexts/PlayerContext";

export interface PlayerProps {
  track: Track;
}

const Player = ({ track }: PlayerProps) => {
  const { bottom } = useSafeAreaInsets();
  const [isPlaying, setIsPlaying] = useState(true);
  const soundRef = useRef<Audio.Sound>();

  // handles new track selection
  useEffect(() => {
    (async () => {
      if (soundRef.current) {
        try {
          await soundRef.current.unloadAsync();
          const { sound } = await Audio.Sound.createAsync(
            { uri: track.url },
            { shouldPlay: true },
            () => {},
            false
          );
          setIsPlaying(true);
          soundRef.current = sound;
        } catch (error) {
          // do something
        }
      }
    })();
  }, [track]);

  useEffect(() => {
    (async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          { uri: track.url },
          { shouldPlay: true },
          () => {},
          false
        );
        soundRef.current = sound;
      } catch (error) {
        // do somenthing
      }
    })();
  }, []);

  const handleButtonPress = async () => {
    if (isPlaying) {
      await soundRef.current?.pauseAsync();
    } else {
      await soundRef.current?.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={[styles.container, { marginBottom: bottom }]}>
      <View>
        <Text style={styles.title}>{track.title}</Text>
        <Text style={styles.subTitle}>{track.artist}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Ionicons
          name={isPlaying ? "pause" : "play"}
          color={"white"}
          size={20}
          style={{ marginLeft: 4 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 5,
    alignItems: "center",
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});
