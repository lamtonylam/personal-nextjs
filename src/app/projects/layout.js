import "../../styles/global.css"

import Analytics from "../../components/analytics";

export const metadata = {
  title: "Tony Lam - Projects",
  description: "Tony Lam - Projects",
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
