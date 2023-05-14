import "@/styles/globals.css";
import Layout from "./Layout";
import { ShoppingCartProvider } from "./ShoppingCartContext";

export default function App({ Component, pageProps }) {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShoppingCartProvider>
  );
}
