"use client";

import React, { useMemo, useState } from "react";
import {Box, Flex, Heading, Spinner, Text} from "@chakra-ui/react";
import {IResponse} from "../../types/response";
import { IPlaylist } from "../../types/playlist";
import { Playlists } from "./Playlists";
import {PlaylistContainerLayout} from "@components/playlists/PlaylistPageLayout";

interface IPlaylistsContainerProps {
  onGoToPlayListClick: (playlistURL: string) => void;
}

export function PlaylistsContainer() {

  const [playlists, setPlaylist] = useState<Array<IPlaylist>>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useMemo(async () => {
    setIsLoading(true)
  const playlistData = await fetchPlaylists();

    if(!playlistData.videos) {
    setIsLoading(false)
      return [];
    }


    setPlaylist(playlistData.videos.filter((video) => video.title !== 'Introduction to React by Pramish'))
    setIsLoading(false)
  },[])
  const onGoToPlayListClick = (playlistURL: string) => {
    window.open(playlistURL, "_blank");
  };

  return (
      <PlaylistContainerLayout>

        {!playlists?.length && isLoading && (
            <Flex justifyContent="center" >
              <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='xl'
              />
            </Flex>
        )}

        {!playlists?.length && !isLoading && (
            <EmptyState />
        )}

        {!!playlists?.length && !isLoading && (
        <Playlists
          playlists={playlists!}
          onGoToPlayListClick={onGoToPlayListClick}
        />
        )}
      </PlaylistContainerLayout>
  );
}

interface IPlayListResponse extends IResponse {
  videos?: Array<IPlaylist>
}

function EmptyState() {
  return (
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size={{ base: 'md', md: 'lg', lg: 'xl' }}>
          Empty playlists
        </Heading>
        <Text color={'gray.500'} mb={6}>
          We're sorry but we don't have any playlists to show you.
        </Text>
      </Box>
  )
}

async function fetchPlaylists():Promise<IPlayListResponse> {
  try {
    const BASE_URL = String(process.env.NEXT_PUBLIC_BASE_URL)
    const playlistURL = `${BASE_URL}/videos`;
    const playlistResponse = await fetch(playlistURL);

    const playlistResponseData:IPlayListResponse = await playlistResponse.json();

    return {
      videos: playlistResponseData.videos,
      message: playlistResponseData.message
    }
  }
  catch (err) {
    const error = err as Error;

    return {
      message: error.message,
    }
  }
}