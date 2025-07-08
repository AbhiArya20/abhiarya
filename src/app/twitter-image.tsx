import { PERSONAL_DATA } from "@/data/personal";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = PERSONAL_DATA.nickname;
export const contentType = "image/svg+xml";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          aspectRatio: "16 / 9",
          backgroundImage: "linear-gradient(to top, #282627, #0f0f0f 75%)",
          color: "#a1a1a1",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "5rem",
            lineHeight: 1,
            fontWeight: 700,
            margin: 0,
          }}
        >
          {PERSONAL_DATA.name}
        </h1>
        <p
          style={{
            fontSize: "2rem",
            lineHeight: 1.4,
            fontWeight: 500,
            margin: 0,
          }}
        >
          {PERSONAL_DATA.title}
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
