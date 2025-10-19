/** biome-ignore-all lint/performance/noImgElement: Not a Next.js component */
import { PERSONAL_DATA } from "@/data/personal";

export const openGraphImages = (
  <div
    style={{
      display: "flex",
      position: "relative",
      background: "black",
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
        maxWidth: "30rem",
        position: "absolute",
        bottom: "6rem",
        left: "7rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        flexWrap: "wrap-reverse",
      }}
    >
      <svg
        viewBox="0 0 68 68"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "3rem",
          height: "3rem",
        }}
      >
        <title
          style={{
            display: "none",
          }}
        >
          Currunt
        </title>
        <path
          d="M29 2.88675C32.094 1.10042 35.906 1.10042 39 2.88675L58.4449 14.1132C61.5389 15.8996 63.4449 19.2008 63.4449 22.7735V45.2265C63.4449 48.7992 61.5389 52.1004 58.4449 53.8868L39 65.1132C35.906 66.8996 32.094 66.8996 29 65.1132L9.55513 53.8867C6.46112 52.1004 4.55514 48.7992 4.55514 45.2265V22.7735C4.55514 19.2008 6.46112 15.8996 9.55514 14.1132L29 2.88675Z"
          fill="white"
          className="fill-black dark:fill-white"
        />
        <path
          d="M30.5887 11.2542C32.1044 8.5739 35.9532 8.53947 37.5166 11.1922L55.8676 42.3295C57.431 44.9822 55.5364 48.3327 52.4573 48.3602L16.3154 48.6836C13.2363 48.7111 11.282 45.3951 12.7978 42.7148L30.5887 11.2542Z"
          fill="black"
          className="fill-white dark:fill-black"
        />
        <path
          d="M34.7919 18.8182C34.9609 16.6453 32.0257 15.8076 31.0224 17.7425L21.5144 36.0795C20.8241 37.4109 21.7903 39.0002 23.2899 39.0002H31.8384C33.0041 39.0002 33.9228 39.9931 33.8324 41.1553L33.2081 49.1818C33.0391 51.3547 35.9743 52.1924 36.9776 50.2575L46.4856 31.9205C47.1759 30.5891 46.2097 28.9998 44.7101 28.9998H36.1616C34.9959 28.9998 34.0772 28.0069 34.1676 26.8447L34.7919 18.8182Z"
          fill="white"
          className="fill-black dark:fill-white"
        />
      </svg>
    </div>
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
);
