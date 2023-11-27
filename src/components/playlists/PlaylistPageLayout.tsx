import React, { ReactNode } from "react";

interface IPlaylistPageLayoutProps {
  children: ReactNode;
}
export function PlaylistPageLayout({ children }: IPlaylistPageLayoutProps) {
  return (
    <div
      style={{
        marginTop: "12px",
        marginBottom: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}
