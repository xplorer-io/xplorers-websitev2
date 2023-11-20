import { Box, Icon, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineSlack, AiOutlineYoutube } from "react-icons/ai";
import { IconType } from "react-icons/lib";
interface IFooterIcon {
  tooltip: string;
  icon: IconType;
  href: string;
}

const NavIcons = () => {
  const footerIcons: IFooterIcon[] = [
    {
      tooltip: "git hub",
      icon: AiFillGithub,
      href: "https://github.com/xplorer-io",
    },
    { tooltip: "slack", icon: AiOutlineSlack, href: "" },
    {
      tooltip: "YouTube",
      icon: AiOutlineYoutube,
      href: "https://www.youtube.com/playlist?list=PLgy1IXj6GNkDBEKHejaR4Gecv9K2Cew9e",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        gap: 4,
      }}
    >
      {footerIcons.map(({ tooltip, icon, href }) => {
        return (
          <Link key={tooltip} href={href}>
            <Tooltip label={tooltip}>
              <Icon as={icon} sx={{ height: "25px", width: "25px" }} />
            </Tooltip>
          </Link>
        );
      })}
    </Box>
  );
};

export default NavIcons;
