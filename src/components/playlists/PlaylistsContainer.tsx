"use client";

import React from "react";
import { IPlaylist } from "../../types/playlist";
import { Playlists } from "./Playlists";

interface IPlaylistsContainerProps {
  onGoToPlayListClick: (playlistURL: string) => void;
}

export function PlaylistsContainer() {
  const onGoToPlayListClick = (playlistURL: string) => {
    window.open(playlistURL, "_blank");
  };

  return (
    <Playlists
      playlists={PLAYLISTS}
      onGoToPlayListClick={onGoToPlayListClick}
    />
  );
}

const PLAYLISTS: Array<IPlaylist> = [
  {
    id: `${Math.random()}`,
    title: "Playlist 1",
    description: "This is the first playlist",
    playlistURL:
      "https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT",
  },
  {
    id: `${Math.random()}`,
    title: "Playlist 2",
    description: "This is the second playlist",
    playlistURL:
      "https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT",
  },
  {
    id: `${Math.random()}`,
    title: "Playlist 3",
    description: "This is the third playlist",
    playlistURL:
      "https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT",
  },
  {
    id: `${Math.random()}`,
    title: "Playlist 4",
    description: "This is the forth playlist",
    playlistURL:
      "https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT",
  },
  {
    id: `${Math.random()}`,
    title: "Playlist 5",
    description: "This is the fifth playlist",
    playlistURL:
      "https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT",
  },
  {
    id: `${Math.random()}`,
    title: "Playlist 6",
    description: "This is the sixth playlist",
    playlistURL:
      "https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT",
  },
];
