import styles from '../../../styles/Home.module.css'

function Feed(feed) {
  return feed.slice(0, 8).map((obj, key) => {
    return (
        <a
          key={key}
          href={obj.media_url}
          aria-label="view image on Instagram"
        >
          <img
            className={styles.img_feed}
            src={obj.media_url}
            alt={obj.id}
            />
        </a>
    )
  })
}

function Instagram({feed}) {
  return (
    <div className={styles.main}>
    <a href='https://www.instagram.com/toatoa_pipa/' target="_blank" className={styles.sub_title} rel="noreferrer">@TOATOA_PIPA</a>
      <div className={styles.grid}>
        <div>
          {feed == null ? <p></p> : Feed(feed) }    
        </div>
      </div>
    </div>
    );
}

export default Instagram;
