import "@/styles/globals.css";
import Layout from "./components/Layout";
import { ShoppingCartProvider } from "./components/ShoppingCartContext";

export default function App({ Component, pageProps }) {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShoppingCartProvider>
  );
}
