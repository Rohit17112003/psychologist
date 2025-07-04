import "./globals.css";
import { Alegreya_Sans } from "next/font/google";
import "remixicon/fonts/remixicon.css";

// Alegreya Sans font setup
const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["500", "700"], // optional: aapko jo weight chahiye woh specify karein
});

export const metadata = {
  title: "Psychologist",
  description: "Less Price Top Bidder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#ffc0cb17]">
      <body className={alegreyaSans.className }>
        {children}
      </body>
    </html>
  );
}
