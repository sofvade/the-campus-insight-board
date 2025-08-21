
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Foro Educativo",
  description: "Plataforma ligera para reseñas universitarias, vivienda y trámites.",
  openGraph: {
    title: "Foro Educativo",
    description: "Plataforma ligera para reseñas universitarias, vivienda y trámites.",
    url: "https://example.com",
    siteName: "Foro Educativo",
    locale: "es_ES",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
