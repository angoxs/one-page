import { CTA, Features, Header } from "../components";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Header />
      <Features />
      <CTA />
    </Layout>
  );
}
