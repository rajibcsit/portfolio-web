import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Al-hasan Sarkar - Professional SEO Expert | Boosting Online Visibility and Rankings",
  description:
    "Welcome to the portfolio of Al-hasan Sarkar, a seasoned SEO expert dedicated to enhancing your online presence. With proven strategies and a passion for digital marketing, I specialize in optimizing websites for search engines. Let's collaborate to elevate your brand's visibility and achieve higher rankings in the digital landscape",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="./js/script.js" />
      </body>
    </html>
  );
}
