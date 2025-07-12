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
      // <div
      //   style={{
      //     display: "flex",
      //     position: "relative",
      //     background: "#1d1d1c",
      //     height: "100vh",
      //     width: "100vw",
      //   }}
      // >
      //   <div
      //     style={{
      //       width: "100%",
      //       height: "0.5rem",
      //       position: "absolute",
      //       top: "5rem",
      //       background: "#404040",
      //     }}
      //   ></div>
      //   <div
      //     style={{
      //       width: "0.5rem",
      //       height: "100%",
      //       position: "absolute",
      //       left: "5rem",
      //       background: "#404040",
      //     }}
      //   ></div>
      //   <div
      //     style={{
      //       width: "0.5rem",
      //       height: "100%",
      //       position: "absolute",
      //       right: "5rem",
      //       background: "#404040",
      //     }}
      //   ></div>
      //   <div
      //     style={{
      //       width: "100%",
      //       height: "0.5rem",
      //       position: "absolute",
      //       bottom: "5rem",
      //       background: "#404040",
      //     }}
      //   ></div>

      //   <div
      //     style={{
      //       display: "flex",
      //       justifyContent: "space-between",
      //       alignItems: "center",
      //       width: "100%",
      //       height: "100%",
      //       padding: "10rem",
      //     }}
      //   >
      //     <div
      //       style={{
      //         flex: 1,
      //         display: "flex",
      //         justifyContent: "start",
      //         flexDirection: "column",
      //       }}
      //     >
      //       <h1
      //         style={{
      //           fontSize: "5rem",
      //           lineHeight: 1,
      //           fontWeight: 700,
      //           margin: 0,
      //         }}
      //       >
      //         {PERSONAL_DATA.name}
      //       </h1>
      //       <p
      //         style={{
      //           fontSize: "2rem",
      //           lineHeight: 1.4,
      //           fontWeight: 500,
      //           margin: 0,
      //         }}
      //       >
      //         {PERSONAL_DATA.title}
      //       </p>
      //     </div>

      //     <div
      //       style={{
      //         flex: 1,
      //         display: "flex",
      //         justifyContent: "flex-end",
      //       }}
      //     >
      //       <img
      //         src={PERSONAL_DATA.avatar}
      //         style={{
      //           height: "50%",
      //           width: "50%",
      //           objectFit: "cover",
      //           borderRadius: "50%",
      //           alignSelf: "flex-end",
      //         }}
      //         alt={PERSONAL_DATA.nickname}
      //       ></img>
      //     </div>
      //   </div>
      // </div>
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
