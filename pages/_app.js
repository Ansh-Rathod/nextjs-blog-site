import Head from "next/head";

function MyApp({ Component, pageProps }) {
  var link =
    "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.0/slate/bootstrap.min.css";
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href={link} />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
