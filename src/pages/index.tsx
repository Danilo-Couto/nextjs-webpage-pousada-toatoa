import HeadComponent from '../components/Head/head'
import styles from '../../styles/Home.module.css'
import MainPage from '../components/MainPage/mainpage'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'

export default function Index( {feed}) {

  return (
    <div className={styles.container}>
      <HeadComponent />
      <Header />
      <MainPage feed={feed} />     
      <Footer />
    </div>
  )
}
export async function getStaticProps(context) {
  const instaUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${process.env.NEXT_PUBLIC_ACESS_TOKEN}`
  const data = await fetch(instaUrl);
  const dataJson = await data.json();
  const instaFeed = dataJson.data;

  return {
    props: {
      feed: instaFeed
    },
  }
}

// references: https://www.thebivvi-telluride.com/#the-bivouac