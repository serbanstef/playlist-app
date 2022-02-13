import Navigation from "./navigation";
import { usePlayer } from "./contexts/PlayerContext";
import Player from "./components/Player";

export default function App() {
  const { isVisible, track } = usePlayer();
  return (
    <>
      <Navigation />
      {isVisible && <Player track={track} />}
    </>
  );
}
