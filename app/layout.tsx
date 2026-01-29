import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "url('/UL_BG.svg') center top / cover no-repeat fixed" }}>
        {/* Borders moved to FrameOne */}
        {children}
      </body>
    </html>
  );
}
