import React from "react";

import { Button, Heading, Text, Image } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { IPlaylist } from "../../types/playlist";
import { PlaylistCardLayout } from "./PlaylistCardLayout";

interface IPlaylistsCardProps {
  playlist: IPlaylist;
  onGoToPlayListClick: (playlistURL: string) => void;
}

export function PlaylistCard({
  playlist,
  onGoToPlayListClick,
}: IPlaylistsCardProps) {
  const { title, description, videoUrl, thumbnailUrl } = playlist;

  const handleGoToPlayListClick = () => {
    onGoToPlayListClick(videoUrl);
  };


  return (
    <PlaylistCardLayout>
      <Heading as="h3" size="md" mb="2">
        {title}
      </Heading>
      <Text color="gray.600" mb="4">
        {description}
      </Text>

        <Image
            maxWidth="max-content"
            src={thumbnailUrl}
        />

      <Button
        rightIcon={<ExternalLinkIcon />}
        colorScheme="teal"
        variant="outline"
        onClick={handleGoToPlayListClick}
      >
        Visit
      </Button>
    </PlaylistCardLayout>
  );
}
