import "./globals.css";

export const metadata = {
  title: "Algorithms & Data Structures",
  description: "By Brad Vatne",
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
