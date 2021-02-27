import {
  CTA,
  CTA2,
  Features,
  Header,
  Introduction,
  Pricing,
} from "../components";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Header />
      <Features />
      <CTA />
      <Introduction />
      <Pricing />
      <CTA2 />
    </Layout>
  );
}
