import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export const metadata = {
  title: "Golden Pakkada Sweets & Snacks",
  description: "Welcome to Golden Pakkada, the premier sweet stall of North Madras! For over 20 years, we've been the go-to destination for those seeking the finest traditional sweets and savories.",
  keywords:
    "Golden Pakkada, GoldenPakkada, Golden Pakkada Sweets and Snacks, Golden Pakkada Sweets & Snacks, Sweet shop near me, best sweet shop near me, Golden pakkada Sweet shop, nearby sweet shop, which sweet shop is the best in chennai, sweet shop chennai, Confectionery store, famous sweet shop near me, sweets and savouries, indian sweet shops, traditional sweets near me, sweet store, sweet shop website, authentic indian sweets, homemade sweets, fresh and tasty sweets, sweet store, indian sweets, order sweets online, chennai famous sweet shop, Appetizers, milk sweets, cashew sweets, traditional indian sweets, Delicious sweets, variety of sweets and savouries, Horlicks mysore pak, boost burfi, special laddu, special jangiri, cashew mysore pak, ghee mysore pak, ghee halwa, gulab jamun, temple laddu, soan papdi, Snacks, snacks shop near me, snacks items, snacks sweet, snacks shop near me open, snacks shop chennai, nearby snacks shop, South Indian sweets delivery, Tamil Nadu traditional sweets, Traditional Indian festival sweets, Buy Indian sweets online, Best sweets in Chennai, Chennai famous sweets, Top mithai shops in Chennai, Buy sweets online in Chennai, Online sweets delivery, Order fresh sweets online, Best mithai delivery service, Same day sweets delivery, Fresh Indian sweets delivered, Order assorted mithai box online, Buy Barfi and Laddu online, Best Rasgulla delivery service, Assorted Indian sweets delivery, Order Laddu and Barfi for delivery, Best sweet shop in Chennai, Best dry fruits sweet shop in Chennai, Best sweet shops for Diwali gifts in Chennai, Signature Indian sweet shop Chennai, Exclusive Indian sweet shop Chennai, Authentic Indian sweet shop Chennai, Classic Indian sweet shop Chennai, Heritage Indian sweet shop Chennai, Royal Indian sweet shop Chennai, Premium Indian sweet shop Chennai, Healthy sweets and snacks options, Gourmet sweets and snacks, Popular sweets and snacks store, Buy sweets and snacks delivery, Order festive sweets and snacks, Fresh mixture, chips, and sweets delivery, Elite sweets and thattai assortment, Handcrafted sweets and thattai mix, Curated selection of sweets and snacks, Finest sweets along with exotic snacks, Delicious Indian snacks, Top-rated snacks, chips, boonthi, and pakoda online, Classic Indian snacks set, sedai, sevu, and chips, Buy traditional snacks, mixture, sevu, and pakoda, order traditional Indian snacks, mixture, murukku, and thattai, Authentic savory bites, boonthi, pakoda, thattai",
  author: "Golden Pakkada",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.goldenpakkada.com" />
        <meta
          property="og:image"
          content="https://www.yoursweetshopwebsite.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://www.yoursweetshopwebsite.com/twitter-image.jpg"
        />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
