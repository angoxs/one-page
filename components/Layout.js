import Head from "next/head";
import { styled } from "../stitches.config";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Frame = styled("div", {
  maxWidth: 1280,
  paddingRight: 90,
  paddingLeft: 90,

  bp2: {
    paddingRight: 20,
    paddingLeft: 20,
  },
});

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>MaxUp | React Landing Template </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
      </style>
      <Navigation />
      <Frame>{children}</Frame>
      <Footer />
    </div>
  );
}
