import openGraphImages from "@/lib/open-graph-image";
import { PERSONAL_DATA } from "@/data/personal";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = PERSONAL_DATA.nickname;
export const contentType = "image/svg+xml";

export default async function Image() {
  const SelectedOpenGraphImage = openGraphImages[0];

  return new ImageResponse(SelectedOpenGraphImage.image, {
    ...size,
  });
}
