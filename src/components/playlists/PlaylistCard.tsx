import React from "react";

import { Box, Button, Heading, Text } from "@chakra-ui/react";
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
  const { title, description, playlistURL } = playlist;

  const handleGoToPlayListClick = () => {
    onGoToPlayListClick(playlistURL);
  };

  return (
    <PlaylistCardLayout>
      <Heading as="h3" size="md" mb="2">
        {title}
      </Heading>
      <Text color="gray.600" mb="4">
        {description}
      </Text>
      <Box>
        <Box
          as="iframe"
          title={title}
          src={playlistURL}
          height="100px"
          allowFullScreen
          borderRadius="lg"
        />
      </Box>

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
