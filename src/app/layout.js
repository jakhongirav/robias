import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/Helvetica-Bold.ttf",
      weight: "700", // Bold
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica-BoldOblique.ttf",
      weight: "700", // Bold Oblique
      style: "italic",
    },
    {
      path: "../../public/fonts/Helvetica.ttf",
      weight: "400", // Normal
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica-Oblique.ttf",
      weight: "400", // Normal Oblique
      style: "italic",
    },
    {
      path: "../../public/fonts/helvetica-light-587ebe5a59211.ttf",
      weight: "300", // Light
      style: "normal",
    },
    {
      path: "../../public/fonts/helvetica-rounded-bold-5871d05ead8de.otf",
      weight: "700", // Rounded Bold
      style: "normal",
    },
    {
      path: "../../public/fonts/helvetica-compressed-5871d14b6903a.otf",
      weight: "900", // Compressed
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Robias",
  description: "Web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
