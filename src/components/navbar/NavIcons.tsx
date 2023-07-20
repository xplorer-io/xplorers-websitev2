import { Box, Icon, Tooltip } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub, AiOutlineSlack, AiOutlineYoutube } from "react-icons/ai";

const NavIcons = () => {
  const footerIcons = [
    { tooltip: "git hub", icon: AiFillGithub },
    { tooltip: "slack", icon: AiOutlineSlack },
    { tooltip: "YouTube", icon: AiOutlineYoutube },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        gap: 4,
      }}
    >
      {footerIcons.map(({ tooltip, icon }) => {
        return (
          <Tooltip key={tooltip} label={tooltip}>
            <Icon as={icon} sx={{ height: "25px", width: "25px" }} />
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default NavIcons;
