import { CTA, Features, Header, Introduction } from "../components";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Header />
      <Features />
      <CTA />
      <Introduction />
    </Layout>
  );
}
