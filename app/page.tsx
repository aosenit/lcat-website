"use client";
import { Button } from "@mantine/core";
import { Inter } from "next/font/google";
import Header from "./components/landing/Header";
import About from "./components/landing/about/About";
import Services from "./components/services/Services";
import BookRide from "./components/landing/book-ride/BookRide";
import DownloadApp from "./components/landing/download-app/DownloadApp";
import Faq from "./components/landing/faq/Faq";
import Articles from "./components/landing/articles/Articles";
import Contact from "./components/landing/contact/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-white">
      <Header />
      <About />
      <Services />
      <BookRide />
      <DownloadApp />
      <Faq />
      <Articles />
      <Contact />
      <Footer />
      <Nav />
    </div>
  );
}
