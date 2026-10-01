import { ImageResponse } from "next/og";
import { person } from "@/content/site";

export const alt = "Paulo Coveiro — ator, cantor e educador de teatro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f1ece2",
          color: "#0f0e0d",
          padding: "56px 64px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 1 }}>
          <span>Nº 001 — ARQUIVO</span>
          <span>
            {person.city.toUpperCase()}, {person.region}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 200,
            fontWeight: 700,
            lineHeight: 0.86,
            letterSpacing: -6,
          }}
        >
          <span>PAULO</span>
          <span style={{ paddingLeft: 120 }}>COVEIRO</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            borderTop: "3px solid #0f0e0d",
            paddingTop: 20,
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          <svg width="48" height="32" viewBox="0 0 24 16">
            <ellipse cx="12" cy="8" rx="12" ry="8" fill="#c4161c" />
            <path d="M7 .73A12 8 0 0 0 7 15.27 9 9 0 0 0 7 .73Z" fill="#0f0e0d" />
          </svg>
          {person.disciplines.join(" · ").toUpperCase()}
        </div>
      </div>
    ),
    size,
  );
}
