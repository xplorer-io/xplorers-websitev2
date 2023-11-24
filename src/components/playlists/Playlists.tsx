import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { PlaylistCard } from "./PlaylistCard";
import { IPlaylist } from "../../types/playlist";
import { PlaylistsLayout } from "./PlaylistsLayout";

interface IPlaylistsProps {
  playlists: Array<IPlaylist>;
  onGoToPlayListClick: (playlistURL: string) => void;
}

export function Playlists({ playlists, onGoToPlayListClick }: IPlaylistsProps) {
  return (
    <PlaylistsLayout>
      <Heading as="h3" size="md" mb="2">
        Here are the list of playlists.
      </Heading>
      <Flex gap="5" flexWrap="wrap">
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            playlist={playlist}
            onGoToPlayListClick={onGoToPlayListClick}
          />
        ))}
      </Flex>
    </PlaylistsLayout>
  );
}
