import "../globals.css";

export const metadata = {
  title: "Tony Lam - Projects",
  description: "Tony Lam - Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
