import Head from 'next/head';
import Script from 'next/script';

function HeadRooms() {
  return (
    <div>
      <Head>
      <title>Pousada Toa Toa Em Pipa</title>
      <meta
        name="description"
        content="Suítes Para Casal e Quartos Para Famíla e Amigos. Ar-Condicionado, varanda com rede e vista, banheiro privativo com chuveiro elétrico, wifi, toalhas e roupas de cama."
      />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KRG7X8VKPK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-KRG7X8VKPK');
      `}
      </Script>
    </div>
  );
}

export default HeadRooms;
