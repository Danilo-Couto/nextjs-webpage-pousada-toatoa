import styles from '../../../styles/Home.module.css'
import Footer from '../../components/Footer/footer'
import Galeria from '../../components/Galeria/galeria'
import Header from '../../components/Header/header'
import { EXTERNAL } from '../../lib/images'

export default function Home({galeria}) {
  return (
    <div className={styles.container}>
      <Header/>
      <Galeria galeria={galeria}/>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  return {
      props: {
        galeria: EXTERNAL
      }
  }
}

