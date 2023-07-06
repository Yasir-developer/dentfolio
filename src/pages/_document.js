import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head />
      <body className="h-full">
        <Main className="h-full" />
        <NextScript />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
          // href='https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap'
          rel="stylesheet"
        />

        <script> </script>
      </body>
    </Html>
  );
}
