import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./globals.css";

export const metadata = {
  title: "Xinzhou | Nanotechnology Research",
  description:
    "A simple personal website for nanotechnology research, materials work, and writing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
