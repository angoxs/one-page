import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Startup Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
      </style>
      {children}
    </div>
  );
}
