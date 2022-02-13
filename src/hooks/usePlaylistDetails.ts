import { useEffect, useState } from "react";
import { getPlaylistById } from "../api";
import { PlaylistByIdResponse } from "../types/playlist";

const useFeaturedPlaylists = (id: string) => {
  const [playlist, setPlaylist] = useState<PlaylistByIdResponse>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getPlaylistById(id);
        setPlaylist(response);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return { playlist, error };
};

export default useFeaturedPlaylists;
