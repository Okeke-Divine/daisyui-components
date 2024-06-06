import "./globals.css";

export const metadata = {
  title: "Daisy Ui Component",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-10 my-5">{children}</body>
    </html>
  );
}
