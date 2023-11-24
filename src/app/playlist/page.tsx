import React from "react";
import { NextPage } from "next";

import { PlaylistsContainer } from "@components/playlists/PlaylistsContainer";
import {PlaylistPageLayout} from "@components/playlists";

const PlaylistPage: NextPage = () => {
  const handleGoToPlayListClick = (playlistURL: string) => {
    window.open(playlistURL, "_blank");
  };

  return (
        <PlaylistPageLayout>
          <PlaylistsContainer onGoToPlayListClick={handleGoToPlayListClick} />
        </PlaylistPageLayout>
  );
};

export default PlaylistPage;
