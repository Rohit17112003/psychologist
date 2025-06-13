import "./globals.css";
import { Alegreya_Sans } from "next/font/google";
import "remixicon/fonts/remixicon.css";

// Alegreya Sans font setup
const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // optional: aapko jo weight chahiye woh specify karein
});

export const metadata = {
  title: "Auction",
  description: "Less Price Top Bidder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alegreyaSans.className}>
        {children}
      </body>
    </html>
  );
}
