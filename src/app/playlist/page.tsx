import React from "react";
import { NextPage } from "next";

import { PlaylistsContainer } from "@components/playlists/PlaylistsContainer";

export const metadata = {
  title: "Xplorers | Playlist",
  description: "Xplorers website",
};

const PlaylistPage: NextPage = () => {
  return (
      <PlaylistsContainer />
  );
};

export default PlaylistPage;
