import "../globals.css";

export const metadata = {
  title: "Tony Lam - Projects",
  description: "Tony Lam - Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          defer
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
        <noscript>
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerpolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
