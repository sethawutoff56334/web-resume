import { ImageResponse } from "next/og";

export const alt = "Sethawut Pornsiripiyakul — Full-Stack Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #f4f9fd 0%, #cfe8f7 60%, #aad6ef 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #5fa9d6, #2d6b98)",
            color: "#ffffff",
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 32,
            boxShadow: "0 10px 30px rgba(45,107,152,0.35)",
          }}
        >
          SP
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#2d6b98",
            marginBottom: 12,
          }}
        >
          Sethawut Pornsiripiyakul
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#3f8bc0",
          }}
        >
          Full-Stack Software Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
