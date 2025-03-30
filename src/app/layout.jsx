import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import SmoothScrollPolyfill from "./components/common/SmoothScrollPolyfill";
import "./globals.css";

// Configure fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata = {
  title: "Denver Concrete Contractors | Expert Concrete Solutions in Denver, CO",
  description: "Denver Concrete Contractors provides professional concrete services including driveways, patios, foundations, and commercial concrete work throughout the Denver metro area.",
  keywords: "concrete contractors denver, concrete installation, concrete driveway, concrete patio, foundation work, commercial concrete, denver, colorado",
  openGraph: {
    title: "Denver Concrete Contractors | Expert Concrete Solutions",
    description: "Professional concrete services for residential and commercial projects in Denver, CO",
    url: "https://denverconcretecontractors.com",
    siteName: "Denver Concrete Contractors",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "verification_token",
  },
  alternates: {
    canonical: "https://denverconcretecontractors.com",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-[#2B2B2B]`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        
        {/* Add polyfill for browsers without native smooth scrolling */}
        <SmoothScrollPolyfill />
      </body>
    </html>
  );
}
