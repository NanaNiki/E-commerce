/**
 * The function exports the App component wrapped in a ShoppingCartProvider and a Layout component.
 * @returns The `App` component is being returned, which wraps the `Component` and `Layout` components
 * with the `ShoppingCartProvider` component. This allows the `ShoppingCartContext` to be accessed by
 * all child components within the app.
 */
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
