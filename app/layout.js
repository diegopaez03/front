import "./globals.css";

export const metadata = {
  title: "Scientists app",
  description: "por Diego Paez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <div style={{ maxWidth: "800px", width: "100%", padding: "0 20px" }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
