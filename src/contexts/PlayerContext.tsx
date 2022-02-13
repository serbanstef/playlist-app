import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ProviderProps {
  children: ReactNode;
}

interface PlayerContext {
  isVisible: boolean;
  track: Track;
  playTrack: (track: Track) => void;
  hidePlayer: () => void;
}

export interface Track {
  artist: string;
  title: string;
  url: string;
}

const PlayerContext = createContext<any>(undefined);

const PlayerProvider = ({ children }: ProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [track, setTrack] = useState<Track | null>(null);

  const playTrack = (track: Track) => {
    setIsVisible(true);
    setTrack(track);
  };

  const hidePlayer = () => setIsVisible(false);

  const value = {
    isVisible,
    track,
    playTrack,
    hidePlayer,
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

const usePlayer = () => {
  const context = useContext(PlayerContext);

  if (context === undefined) {
    throw new Error("PlayerContext was used outside of its Provider");
  }

  return context as PlayerContext;
};

export { PlayerProvider, usePlayer };
