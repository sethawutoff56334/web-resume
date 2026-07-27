import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #5fa9d6, #2d6b98)",
          borderRadius: "50%",
          color: "#ffffff",
          fontSize: 16,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        SP
      </div>
    ),
    { ...size }
  );
}
