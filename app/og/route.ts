import { createElement } from "react";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const dynamic = "force-static";

export async function GET() {
  const image = createElement(
    "div",
    {
      style: {
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        border: "1px solid #272a32",
        background: "linear-gradient(135deg, #17191f 0%, #09090b 70%)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      },
    },
    createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "14px",
          color: "#93c5fd",
          fontSize: 23,
          fontWeight: 700,
          letterSpacing: "3px",
        },
      },
      createElement("div", {
        style: {
          width: "32px",
          height: "3px",
          background: "#60a5fa",
        },
      }),
      "SOFTWARE ENGINEER",
    ),
    createElement(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      createElement(
        "div",
        {
          style: {
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-3px",
          },
        },
        "Pasindu Jeewan",
      ),
      createElement(
        "div",
        {
          style: {
            maxWidth: "900px",
            marginTop: "22px",
            color: "#cbd5e1",
            fontSize: 30,
            lineHeight: 1.4,
          },
        },
        "Building thoughtful web, mobile, and cloud experiences.",
      ),
    ),
    createElement(
      "div",
      {
        style: {
          display: "flex",
          color: "#94a3b8",
          fontSize: 19,
          letterSpacing: "2px",
        },
      },
      "REACT · NEXT.JS · TYPESCRIPT",
    ),
  );

  return new ImageResponse(image, { width: 1200, height: 630 });
}
