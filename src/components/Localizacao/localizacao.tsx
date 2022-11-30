import Link from 'next/link';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import styles from '../../../styles/Home.module.css'
import ButtonDrive from '../Buttons/bookDrive';
import ButtonChangeMap from '../Buttons/buttonChangeMap';
import Map from './Map/map';
import StaticMap from './Map/StaticMap';

function Localizacao() {
  const [showLocation, setShowLocation] = useState(false);
  const {pathname} = useRouter();
  const [showMaps, setShowMaps] = useState(true);
  
  useEffect(() => {
    if (pathname !== '/') setShowLocation(true)
  }, [pathname]);


  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>LOCALIZACAO</h2>
      <h3 className={styles.description}>
        A 50 METROS DA PRAIA DO AMOR E 500 METROS DO CENTRO DE PIPA!
      </h3>
        {showLocation &&
        <p className={styles.description}>
        Estamos muito bem localizados <b>ao lado da natureza e perto do centro</b>, mas isolado do barulho da cidade e agitação das noitadas de Pipa.
        <br/>
        Nossa rua é o <b>único acesso a Praia do Amor</b>.
        <br/>
        Chegando aqui, o recomendado é deixar o carro em nosso estacionamento e <b>fazer tudo a pé</b>: caminhadas, passeios e botecagem.
        <br/>
        Nossos vizinhos são nosso amigos e oferecem todos os serviços complementares a sua estadia: <b>padarias, restaurantes, mercados, farmácias, bancos, lojas e outras conveniências</b>.
        <br/>
        Durante o dia, banhistas, surfistas e sofistas desfilam em nossa rua. Cai a noite e o único som é do das ondas do mar batendo nas falésias. 
      </p>
      }
      <h3 className={styles.description}>AEROPORTOS</h3>
      <p className={styles.description}>
      O <b>Aeroporto de Natal </b>, Aeroporto Governador Aluízio Alves, fica na verdade em São Gonçalo do Amarante, e esta <b>a 116 km de Pipa</b>.
      </p>
      <p className={styles.description}>
      Já o <b>Aeroporto de Joao Pessoa</b>, Castro Pinto, esta localizado a <b>141km</b> daqui daqui.
      </p>
      <div className={styles.grid}>
        <ButtonDrive/>
        <Link
          className={styles.button_drive}
          href='/como_chegar'
        >COMO CHEGAR</Link>
        <ButtonChangeMap showMaps={showMaps} setShowMaps={setShowMaps}/>
      </div>
      <div className={styles.main}>
        <p>Rua Praia do Amor, 48, B, Pipa - RN</p>
        <div className={styles.grid}>
        { showMaps ? <Map /> : <StaticMap /> }
        </div>
      </div>
    </div>
    );
  }

export default Localizacao;