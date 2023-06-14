/**
 * This is a Next.js document component that sets the language and adds a smooth scrolling class to the
 * HTML element.
 * @returns This code is defining a custom `Document` component for Next.js. When this component is
 * rendered, it will return an HTML document with a `lang` attribute set to "en" and a `className`
 * attribute set to "scroll-smooth". The `Head` component is used to add any necessary meta tags,
 * links, or scripts to the document's head section.
 */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta
          name="description"
          content="Shop the best plants, for all your needs!"
          title="Plantea Shop"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
