/* eslint-disable @next/next/no-img-element */
import { PERSONAL_DATA } from "@/data/personal";

const openGraphImages = [
  {
    image: (
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
  },
  {
    image: (
      <div
        style={{
          display: "flex",
          position: "relative",
          background: "#1d1d1c",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "0.3rem",
            position: "absolute",
            top: "4rem",
            background: "#404040",
            opacity: 0.5,
          }}
        ></div>
        <div
          style={{
            width: "0.3rem",
            height: "100%",
            position: "absolute",
            left: "4rem",
            background: "#404040",
            opacity: 0.5,
          }}
        ></div>
        <div
          style={{
            width: "0.3rem",
            height: "100%",
            position: "absolute",
            right: "4rem",
            background: "#404040",
            opacity: 0.5,
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "0.3rem",
            position: "absolute",
            bottom: "4rem",
            background: "#404040",
            opacity: 0.5,
          }}
        ></div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding: "7rem",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              color: "white",
            }}
          >
            <h1
              style={{
                fontSize: "3rem",
                lineHeight: 1,
                fontWeight: 900,
                margin: 0,
              }}
            >
              {PERSONAL_DATA.name}
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.4,
                fontWeight: 500,
                margin: 0,
                color: "darkgray",
              }}
            >
              {PERSONAL_DATA.title}
            </p>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={PERSONAL_DATA.githubAvatar}
              style={{
                height: "300px",
                width: "300px",
                objectFit: "cover",
                borderRadius: "50%",
                alignSelf: "flex-end",
              }}
              alt={PERSONAL_DATA.nickname}
            ></img>
          </div>
        </div>
      </div>
    ),
  },
];

export default openGraphImages;
