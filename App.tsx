import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import App from "./src";
import { PlayerProvider } from "./src/contexts/PlayerContext";

export default function AppWrapper() {
  return (
    <SafeAreaProvider>
      <PlayerProvider>
        <App />
        <StatusBar style="light" />
      </PlayerProvider>
    </SafeAreaProvider>
  );
}
