import { Geist, Geist_Mono } from "next/font/google";
import { localFont } from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import SideBar from "@/components/SideBar";

const beholden = localFont({
  src: [
    {
      path: "../../public/Beholden-Regular.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/Beholden-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Beholden-Medium-Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/Beholden-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/Beholden-Bold-Italic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-lineseed",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "post party 5000",
  description: "meet other morons",
  openGraph: {
    title: "post party 5000",
    description: "meet other morons",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased flex flex-col min-h-screen relative`}>
        <ClerkProvider
          appearance={{
            cssLayerName: "clerk",
          }}
        >
          <Header className={`place-self-center w-full`} />
          <div className="flex flex-col md:flex-row w-full min-h-full grow justify-center">
            <SideBar className={``} />
            <main className="flex w-full max-w-5xl flex-col p-8 grow">
              {children}
            </main>
          </div>
          <Footer className={`place-self-center w-full`} />
        </ClerkProvider>
        <div className="paperOverlay"></div>
      </body>
    </html>
  );
}
