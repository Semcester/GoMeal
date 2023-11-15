import "./globals.css";

import Layout from "@/components/Layout";

export const metadata = {
  title: "Feed Your Hungry",
  description: "Everyday we make you happy meals",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout children={children} />
      </body>
    </html>
  );
}
