import "../styles/global.css";
import Analytics from "../components/analytics";

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL),
  title: "Tony Lam",
  description: "Tony Lam - Computer Science Student at University of Helsinki",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  );
}
