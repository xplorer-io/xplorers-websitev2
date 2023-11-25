import React from "react";
import { NextPage } from "next";

import { PlaylistsContainer } from "@components/playlists/PlaylistsContainer";
import { PlaylistPageLayout } from "@components/playlists";

export const metadata = {
  title: "Xplorers | Playlist",
  description: "Xplorers website",
};

const PlaylistPage: NextPage = () => {
  return (
    <PlaylistPageLayout>
      <PlaylistsContainer />
    </PlaylistPageLayout>
  );
};

export default PlaylistPage;
