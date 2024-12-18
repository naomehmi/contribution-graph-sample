import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '700'], // Specify the weights you want to use
  subsets: ['latin'],     // Include character subsets
  variable: '--font-inter', // Optional: Define a CSS variable for the font
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
