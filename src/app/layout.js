import "./globals.css";

export const metadata = {
  title: "Tony Lam",
  description: "Tony Lam - Computer Science Student at University of Helsinki",
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
