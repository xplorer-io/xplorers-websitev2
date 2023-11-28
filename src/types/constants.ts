import ROUTE from "./routes";

export const joinSlackUrl =
  "https://join.slack.com/t/xplorers-io/shared_invite/zt-27cdb5ouu-taJbzO_Z0E5kbdMQ8nAJ9A";

export const navLinks = [
  {
    name: "About",
    route: ROUTE.ABOUT,
    enabled: false,
  },
  {
    name: "Playlist",
    route: ROUTE.PLAYLIST,
    enabled: true,
  },
  {
    name: "Project",
    route: ROUTE.PROJECTS,
    enabled: true,
  },
  {
    name: "Accolades",
    route: ROUTE.ACCOLADES,
    enabled: true,
  },
];
