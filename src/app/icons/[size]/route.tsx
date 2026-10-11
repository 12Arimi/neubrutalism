import { ImageResponse } from "next/og";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ size: string }> }
) {
  const { size } = await params;
  const px = Math.min(Math.max(parseInt(size) || 512, 48), 1024);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fde047",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: px * 0.6,
            height: px * 0.6,
            background: "#fff",
            border: `${px * 0.04}px solid #000`,
            boxShadow: `${px * 0.04}px ${px * 0.04}px 0 #000`,
            fontSize: px * 0.38,
            fontWeight: 900,
            color: "#000",
          }}
        >
          N
        </div>
      </div>
    ),
    { width: px, height: px }
  );
}