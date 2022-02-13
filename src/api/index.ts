import { BASE_URL } from "../constants";
import { PlaylistByIdResponse } from "../types/playlist";
import { PlaylistsResponse } from "../types/playlists";

export const getPlaylists = async (
  offset: number = 0
): Promise<PlaylistsResponse> => {
  const response = await fetch(
    `${BASE_URL}/v1/browse/featured-playlists?offset=${offset}&limit=20`
  );
  const json = await response.json();
  return json;
};

export const getPlaylistById = async (
  id: string
): Promise<PlaylistByIdResponse> => {
  const response = await fetch(`${BASE_URL}/v1/playlists/${id}`);
  const json = await response.json();
  return json;
};
