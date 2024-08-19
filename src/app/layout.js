import "./globals.css";
import Analytics from "../components/analytics";

export const metadata = {
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
