import { ThemeProvider } from "@mui/material";
import Head from "next/head";
import defaultTheme from "@/app/theme";
import Navbar from "@/components/NavBar";

export const metadata = {
  title: "Scientists app",
  description: "por Diego Paez",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <html lang="en">
          <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
          </Head>
          <body>
        <Navbar/>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "initial",
                height: "100vh",
              }}
            >
              <div
                style={{ maxWidth: "800px", width: "100%", padding: "0 20px" }}
              >
                {children}
              </div>
            </div>
          </body>
      </html>
    </ThemeProvider>
  );
}
