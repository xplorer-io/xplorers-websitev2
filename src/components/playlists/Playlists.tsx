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
        <Heading as="h2" size={{ base: 'md', md: 'lg', lg: 'xl' }}>
            Please enjoy playlists from our community!
        </Heading>
      <Flex gap="5" flexWrap="wrap" justifyContent="space-between">
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.videoId}
            playlist={playlist}
            onGoToPlayListClick={onGoToPlayListClick}
          />
        ))}
      </Flex>
    </PlaylistsLayout>
  );
}
