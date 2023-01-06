import React from "react";
import { GalleryImg } from "./styled";

export default function Gallery({ src, alt }) {
  return (
    <GalleryImg>
      <img width="200" height="257" src={src} alt={alt} />
    </GalleryImg>
  );
}
