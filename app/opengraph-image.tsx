import { ImageResponse } from "next/og";

export const alt = "Cabas : tes courses de la semaine, dans ton budget";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#FAF6EE",
          padding: 80,
          color: "#1F3D2B",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700 }}>Cabas</div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 32,
          }}
        >
          Tes courses de la semaine, dans ton budget.
        </div>
        <div style={{ fontSize: 36, color: "#E4572E", marginTop: 40 }}>
          9 € par mois · Satisfait ou remboursé 14 jours
        </div>
      </div>
    ),
    size,
  );
}
