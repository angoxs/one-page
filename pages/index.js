import { CTA, CTA2, Features, Header, Introduction } from "../components";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Header />
      <Features />
      <CTA />
      <Introduction />
      <CTA2 />
    </Layout>
  );
}
