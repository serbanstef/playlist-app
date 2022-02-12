import { useEffect, useState } from "react";
import { getPlaylists } from "../api/playlists";
import { PlaylistItem } from "../types/playlists";

const useFeaturedPlaylists = () => {
  const [message, setMessage] = useState("");
  const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);
  const [error, setError] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getPlaylists();
        setPlaylists(response.playlists.items);
        setMessage(response.message);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  const loadMore = async () => {
    const offset = playlists.length;
    const response = await getPlaylists(offset);
    setPlaylists((prev) => [...prev, ...response.playlists.items]);
  };

  return { message, playlists, error, loadMore };
};

export default useFeaturedPlaylists;
