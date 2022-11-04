import Image from 'next/image'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import styles from '../../../styles/Home.module.css'
import { rooms } from '../../consts'
import Quarto from '../../components/Quarto/quarto'

export default function Quartos ({quarto}) {
  return(
    <div className={styles.container}>
    <Header/>
    < Quarto quarto={quarto} />
    <Footer />
  </div>
  )
}

export async function getStaticProps({ params }) {
  const cor = params.quarto;
  const quarto = rooms.filter(room => room.name === cor)[0]

  return {
    props: {
      quarto
    }
  }
}


export function getStaticPaths() {
  const paths = rooms.map(room => {
    const quarto = room.name;
    return {
      params: {
        quarto
      }
    }
  });
  return {
    paths,
    fallback: false
  }
}